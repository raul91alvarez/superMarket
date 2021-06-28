import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicTabsPillsComponent } from './basic-tabs-pills.component';

describe('BasicTabsPillsComponent', () => {
  let component: BasicTabsPillsComponent;
  let fixture: ComponentFixture<BasicTabsPillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTabsPillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTabsPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
