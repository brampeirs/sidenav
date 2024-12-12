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
    '[class.sidenav-item-selected]': 'itemSelected()()',
  },
})
export class SidenavItemComponent {
  icon = input<string>();
  selected = input(false, { transform: booleanAttribute });
  matchRouterExact = input(false, { transform: booleanAttribute });

  protected itemSelected = computed(() => signal(this.selected()));

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
      .subscribe((e) => {
        this.updateRouterActive();
      });
  }

  private updateRouterActive(): void {
    const routerLink = this.routerLinkContentChild();
    if (!routerLink || !this.router.navigated) {
      return;
    }

    const isLinkActive = this.isRouterLinkActive(routerLink);
    if (this.itemSelected()() !== isLinkActive) {
      this.itemSelected().set(isLinkActive);
      if (this.sideNavMenuService && routerLink.urlTree) {
        this.sideNavMenuService.setSideNavItemSelection(
          routerLink.urlTree.toString(),
          isLinkActive
        );
      }
    }
  }

  private isRouterLinkActive(link: RouterLink): boolean {
    return this.router.isActive(link.urlTree || '', {
      paths: this.matchRouterExact() ? 'exact' : 'subset',
      queryParams: this.matchRouterExact() ? 'exact' : 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
}
