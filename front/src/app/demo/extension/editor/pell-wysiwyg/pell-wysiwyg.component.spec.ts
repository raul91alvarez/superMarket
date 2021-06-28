import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PellWysiwygComponent } from './pell-wysiwyg.component';

describe('PellWysiwygComponent', () => {
  let component: PellWysiwygComponent;
  let fixture: ComponentFixture<PellWysiwygComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PellWysiwygComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PellWysiwygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
