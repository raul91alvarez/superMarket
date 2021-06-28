import { ListGroup } from './../../../interfaces/groupProduct';
import { ProductService } from './../../../services/product/product.service';
import { IOption } from 'ng-select';
import { FormInput } from './../../../../demo/pages/form-elements/frm-validation/frm-validation.component';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IProduct, Measurement } from 'src/app/addons/interfaces/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.scss']
})
export class ProductDataComponent implements OnInit {

  @Input() data: IProduct;

  public formInput: IProduct;
  Unidades: Measurement = new Measurement;
  Groups: ListGroup = new ListGroup;
  public listUnidades: Array<IOption> =[];
  public listGroup: Array<IOption> =[];

  isSubmit: boolean = false;

  constructor(private _prodServ:ProductService) { 
    this.listUnidades= this.Unidades.getList;
    this.listGroup= this.Groups.getList;
    this.formInput = {
    code: "",
    description: "",
    amount: 0,
    measurement: "",
    price_public: 0.0,
    price: 0.0,
    group: "",
    };
  }

  ngOnInit(): void {
    //load data from edit
    if (this.data) {
      this.loadDataEdit();
    }
  }

  //building data from edit
  loadDataEdit(){
    this.formInput = {
      id: this.data.id,
      code: this.data.code,
      description: this.data.description,
      amount: this.data.amount,
      measurement: this.data.measurement,
      price_public: this.data.price_public,
      price: this.data.price,
      group: this.data.group,
      };  
  }

  save(f:NgForm){
    console.log(this.formInput);
    if (f.valid) {
      if (this.data) {
        this._prodServ.editProduct(this.formInput);
      }else{
        this._prodServ.addProduct(this.formInput);

      }

    }
    
  }



}
