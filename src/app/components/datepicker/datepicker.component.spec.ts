import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbDatepickerComponent } from './datepicker.component';

describe('AbDatepickerComponent', () => {
  let component: AbDatepickerComponent;
  let fixture: ComponentFixture<AbDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbDatepickerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AbDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
