import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FullEventCalendarComponent } from './full-event-calendar.component';

describe('FullEventCalendarComponent', () => {
  let component: FullEventCalendarComponent;
  let fixture: ComponentFixture<FullEventCalendarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FullEventCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullEventCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
