import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FrmPickerComponent } from './frm-picker.component';

describe('FrmPickerComponent', () => {
  let component: FrmPickerComponent;
  let fixture: ComponentFixture<FrmPickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
