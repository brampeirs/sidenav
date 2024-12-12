/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { Injectable, signal } from '@angular/core';

@Injectable()
export class SidenavMenuService {
  private sidenavItemSelectionState = signal<Record<string, boolean>>({});

  setSideNavItemSelection(item: string, selected: boolean): void {
    this.sidenavItemSelectionState.update((prev) => ({
      ...prev,
      [item]: selected,
    }));
  }

  hasSideNavItemSelected(): boolean {
    return Object.values(this.sidenavItemSelectionState()).some(
      (selected) => selected
    );
  }
}
