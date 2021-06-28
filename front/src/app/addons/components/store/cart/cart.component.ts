import { IProduct } from 'src/app/addons/interfaces/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  //Input of products list
  @Input() product: IProduct[];
  @Output() invoice = new EventEmitter<IProduct[]>();

  public list : IProduct[]=[];

  constructor() { 
    this.list = this.product;
  }

  ngOnInit(): void {
    console.log(this.product);
  }

  //delete product within list cart
  deleteProductCart(item: IProduct ){
    let temp=[];
    for (let i = 0; i < this.list.length; i++) {
      if (item.code != this.list[i].code ) {
        temp.push(this.list[i]);
        
      }
      
    }
    this.list= temp;
  }



  //send event
  invoiceLoad(){
    // emit event to functions emit invoice
    console.log(this.list);
    this.invoice.emit(this.list);
  }

}
