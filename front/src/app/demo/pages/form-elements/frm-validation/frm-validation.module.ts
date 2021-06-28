import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmValidationRoutingModule } from './frm-validation-routing.module';
import { FrmValidationComponent } from './frm-validation.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {CustomFormsModule} from 'ngx-custom-validators';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FrmValidationRoutingModule,
    SharedModule,
    CustomFormsModule,
    ReactiveFormsModule
  ],
  declarations: [FrmValidationComponent]
})
export class FrmValidationModule { }
