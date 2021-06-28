import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HdTicketComponent } from './hd-ticket.component';

describe('HdTicketComponent', () => {
  let component: HdTicketComponent;
  let fixture: ComponentFixture<HdTicketComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HdTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
