import { Directive, input } from '@angular/core';

@Directive({
  selector: '[sidenav]',
  exportAs: 'sidenav',
  host: {},
})
export class SidenavDirective {
  constructor() {}
  collapsed = input<boolean>(false);
}
