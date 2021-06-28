import { Business } from './../../../interfaces/business';
import { ExcelService } from './../../../services/export/excel.service';
import { ProductService } from './../../../services/product/product.service';
import { IProduct } from './../../../interfaces/product';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  //data neccessary
  private $Subs : Subscription[]=[];
  private ObjData: Business = new Business();  //info business
  public productPopup: IProduct;

    // data table product
    public dataProduct: IProduct[]=[];
    public dtOptions: DataTables.Settings = {};
    public dtTrigger = new Subject();

  constructor(private prodServ: ProductService, private excsrv: ExcelService, private modalService: NgbModal,) { }
 
  ngOnDestroy(): void {
    this.$Subs.forEach((res)=>{
      res.unsubscribe();
    });
    this.dtTrigger.unsubscribe();
  }

  ngOnInit() {
    this.dtOptions={
      pagingType:'full_numbers',
      pageLength:10,
      ordering: false,
      language:{
        url:'//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
    };
    this.getListproduct();

  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
 
  //get list product
  getListproduct(){
    this.$Subs.push(this.prodServ.getListProduct().subscribe(async actionArray => {
      this.dataProduct = await actionArray.map(item => {
        return {
          ...item.payload.doc.data()
        } as IProduct;
      });
        this.refreshDataTable();
      }));
    
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

  //actions--------------------------------------------------------------------------------------

  //save data from form
  save(f:any){
    
  }

  openPopup(content: string, data: IProduct){
    this.productPopup = data;
    console.log(this.productPopup);
    this.modalService.open(content, {backdrop: 'static', size: 'lg', keyboard: false, centered: true}).result.then((result) => {
      
    }, (reason) => {
      let closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  exportExcel(): void {
    const lisXls = [];
    for (let i = 0; i < this.dataProduct.length; i++) {

      lisXls.push([
        this.dataProduct[i].code,
        this.dataProduct[i].description,
        this.dataProduct[i].price_public,
        this.dataProduct[i].price,
        this.dataProduct[i].amount,
        this.dataProduct[i].group,
        this.dataProduct[i].measurement,
        
      ]);
    }


    const pHeader = ["Codigo", "Descripción", "Prc.Publico", "Prc.Base", "Cantidad","Grupo","Und.Medida"];
    const pCol = [15, 40, 15, 15, 15,15,15];
    const pTit = 'Mercado las Calandrias';
    const pSubtit = "Listado de productos";
    this.excsrv.generateExcelFix(
      pTit, pSubtit, this.ObjData,
      pHeader, pCol, lisXls, [],
      [], [], [],
      {}
    );
  }

  //delete
  deleteProduct(pid:string){
    this.prodServ.deleteProduct(pid);
  }

}
