import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvNotificationComponent } from './adv-notification.component';

describe('AdvNotificationComponent', () => {
  let component: AdvNotificationComponent;
  let fixture: ComponentFixture<AdvNotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
