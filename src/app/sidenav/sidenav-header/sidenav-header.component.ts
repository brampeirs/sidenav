import { Component, input } from '@angular/core';

@Component({
  selector: 'sidenav-header',
  imports: [],
  templateUrl: './sidenav-header.component.html',
  styleUrl: './sidenav-header.component.scss',
})
export class SidenavHeaderComponent {
  title = input<string>();
}
