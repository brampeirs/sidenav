import { Component, contentChildren, inject, input } from '@angular/core';
import { SidenavItemComponent } from '../sidenav-item/sidenav-item.component';
import { SidenavMenuService } from './sidenav-menu.service';

@Component({
  selector: '[sidenav-menu]',
  exportAs: 'sidenavMenu',
  imports: [],
  templateUrl: './sidenav-menu.component.html',
  styleUrl: './sidenav-menu.component.scss',
  host: {},
  providers: [SidenavMenuService],
})
export class SidenavMenuComponent {
  title = input<string>();
  sidenavItemsInMenu = contentChildren(SidenavItemComponent, {
    descendants: true,
  });

  sideNavMenuService = inject(SidenavMenuService);
}
