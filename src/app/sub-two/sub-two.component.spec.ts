import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTwoComponent } from './sub-two.component';

describe('SubTwoComponent', () => {
  let component: SubTwoComponent;
  let fixture: ComponentFixture<SubTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
