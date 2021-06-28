import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FrmMaskingComponent } from './frm-masking.component';

describe('FrmMaskingComponent', () => {
  let component: FrmMaskingComponent;
  let fixture: ComponentFixture<FrmMaskingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmMaskingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmMaskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
