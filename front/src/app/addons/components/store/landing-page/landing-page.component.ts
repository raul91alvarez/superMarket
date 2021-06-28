import { Subject, Subscription } from 'rxjs';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/addons/services/product/product.service';
import Swal from 'sweetalert2';
import { IProduct } from 'src/app/addons/interfaces/product';
import { DataTableDirective } from 'angular-datatables';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit,AfterViewInit {

  //subscriptions
  private $subs: Subscription[]=[];
  public cart: IProduct[]=[];

  // datatable
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  public dataProduct: IProduct[]=[];
  public dtOptions: DataTables.Settings = {};
  public dtTrigger = new Subject();


  constructor(private _prodServ: ProductService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getData();
    this.dtOptions={
      pagingType:'full_numbers',
      pageLength:10,
      ordering: false,
      language:{
        url:'//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

    //refresh data table
    refreshDataTable(){
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    }

  

  //get data from service
  getData(){
 
      this.$subs.push(this._prodServ.getListProduct().subscribe( actionArray => {
        this.dataProduct =  actionArray.map(item => {
          return {
            ...item.payload.doc.data()
          } as IProduct;
        });
          this.refreshDataTable();
        }));
  
   
  }

  //functions add at cart
  addCart(item: IProduct){
    this.cart.push(item);


  }

  openPopup(content: string){
    if (this.cart.length !=0) {
      this.modalService.open(content, {backdrop: 'static', size: 'lg', keyboard: false, centered: true}).result.then((result) => {
      
    }, (reason) => {
      let closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }else{
      Swal.fire("Vacío","Agregue productos a su pedido","info")
    }
    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  //emit 
  invoiceEmit(event: IProduct[]){
    console.log("emit invoice");
    console.log(event);
  }

  

  

}
