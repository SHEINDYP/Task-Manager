import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationCalendarComponent } from './vacation-calendar.component';

describe('VacationCalendarComponent', () => {
  let component: VacationCalendarComponent;
  let fixture: ComponentFixture<VacationCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
