import {
  booleanAttribute,
  Component,
  computed,
  contentChild,
  contentChildren,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  UrlTree,
} from '@angular/router';
import { filter } from 'rxjs';
import { SidenavMenuService } from '../sidenav-menu/sidenav-menu.service';

@Component({
  selector: '[sidenav-item]',
  exportAs: 'sidenavItem',
  imports: [RouterModule],
  templateUrl: './sidenav-item.component.html',
  styleUrl: './sidenav-item.component.scss',
  host: {
    '[class.sidenav-item-selected]': 'selected()',
  },
})
export class SidenavItemComponent {
  icon = input<string>();

  protected selected = signal(false);

  private router = inject(Router);
  routerLinkContentChild = contentChild(RouterLink, { descendants: true });
  sideNavMenuService = inject(SidenavMenuService, { optional: true });

  // active link logic inspired by ngZorro
  // https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/menu/menu-item.component.ts#L118
  constructor() {
    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.updateActiveState();
      });
  }

  private updateActiveState(): void {
    const routerLink = this.routerLinkContentChild();
    const urlTree = routerLink?.urlTree;

    if (!urlTree || !this.router.navigated) {
      return;
    }

    // update the item's selection state
    const isLinkActive = this.isRouterLinkActive(urlTree);
    this.selected.set(isLinkActive);

    // if sidenav item lives in a sidenav menu, update the menu's selection state
    if (this.sideNavMenuService) {
      this.sideNavMenuService.setSideNavItemSelection(
        routerLink.urlTree.toString(),
        isLinkActive
      );
    }
  }

  private isRouterLinkActive(urlTree: UrlTree): boolean {
    return this.router.isActive(urlTree, {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
}
