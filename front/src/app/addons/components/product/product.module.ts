import { TagInputModule } from 'ngx-chips';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ProductDataComponent } from './product-data/product-data.component';
import { SelectModule } from 'ng-select';


@NgModule({
  declarations: [ProductListComponent, ProductDataComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    DataTablesModule,
    TagInputModule,
    SelectModule
  ]
})
export class ProductModule { }
