import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HdCustomerDetailComponent } from './hd-customer-detail.component';

describe('HdCustomerDetailComponent', () => {
  let component: HdCustomerDetailComponent;
  let fixture: ComponentFixture<HdCustomerDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HdCustomerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
