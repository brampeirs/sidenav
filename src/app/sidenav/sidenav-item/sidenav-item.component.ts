import { Component, input } from '@angular/core';

@Component({
  selector: '[sidenav-item]',
  exportAs: 'sidenavItem',
  imports: [],
  templateUrl: './sidenav-item.component.html',
  styleUrl: './sidenav-item.component.scss',
})
export class SidenavItemComponent {
  icon = input<string>();
}
