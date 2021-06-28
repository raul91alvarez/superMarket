import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HdDashboardComponent } from './hd-dashboard.component';

describe('HdDashboardComponent', () => {
  let component: HdDashboardComponent;
  let fixture: ComponentFixture<HdDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HdDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
