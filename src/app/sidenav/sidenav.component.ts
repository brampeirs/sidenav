import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavHeaderComponent } from './sidenav-header/sidenav-header.component';
import { SidenavDividerComponent } from './sidenav-divider/sidenav-divider.component';
import { SidenavDirective } from './sidenav.directive';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';

@Component({
  selector: 'app-sidenav',
  imports: [
    RouterModule,
    SidenavHeaderComponent,
    SidenavDividerComponent,
    SidenavDirective,
    SidenavItemComponent,
    SidenavMenuComponent,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {}
