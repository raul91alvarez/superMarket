
import { SharedModule } from './../../../theme/shared/shared.module';
import { SelectModule } from 'ng-select';
import { TagInputModule } from 'ngx-chips';
import { DataTablesModule } from 'angular-datatables';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OwnComponent } from './own/own.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [LandingPageComponent, OwnComponent, CartComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
    DataTablesModule,
    TagInputModule,
    SelectModule,
    
  ]
})
export class StoreModule { }
