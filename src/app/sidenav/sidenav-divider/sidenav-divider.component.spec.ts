import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDividerComponent } from './sidenav-divider.component';

describe('SidenavDividerComponent', () => {
  let component: SidenavDividerComponent;
  let fixture: ComponentFixture<SidenavDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
