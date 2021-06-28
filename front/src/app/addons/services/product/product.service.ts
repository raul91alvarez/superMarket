import { NotificationsService } from './../notifications/notifications.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { IProduct } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private prodRef: AngularFirestoreCollection<IProduct> = null;
  private dbPath = 'products';


  constructor(private db: AngularFirestore, private ns: NotificationsService) { 
    this.prodRef = db.collection(this.dbPath);
  }

    //******generate cripto random value*******
    dec2hex(dec) {
      return ('0' + dec.toString(16)).substr(-2)
    }
  
    // generateId :: Integer -> String
    generateDid(len) {
      var arr = new Uint8Array((len || 40) / 2)
      window.crypto.getRandomValues(arr)
      return Array.from(arr, this.dec2hex).join('')
    }
  
    // return in real time the query actually
    getListProduct() {
      return this.prodRef.snapshotChanges();
    }

    //create product
    addProduct(data: IProduct) {
      let pid =this.generateDid(10);
      this.prodRef.doc(pid).set({
        id: pid,
        description: data.description,
        code: data.code,
        measurement: data.measurement,
        group: data.group,
        amount: data.amount,
        price_public: data.price_public,
        price: data.price
      })
        .then(() => {
          this.ns.successSwal("Exito", "Producto creado");
        })
        .catch((err) => {
  
          this.ns.dangerSwal("Error", "No se pudo ejecutar a acción");
          console.log(err);
        })
    }

    //edit
    //create product
    editProduct(data: IProduct) {
      this.prodRef.doc(data.id).update({
        id: data.id,
        description: data.description,
        code: data.code,
        measurement: data.measurement,
        group: data.group,
        amount: data.amount,
        price_public: data.price_public,
        price: data.price
      })
        .then(() => {
          this.ns.successSwal("Exito", "Producto editado");
        })
        .catch((err) => {
  
          this.ns.dangerSwal("Error", "No se pudo ejecutar a acción");
          console.log(err);
        })
    }
    


    // return in real time the query actually
    deleteProduct(pid:string) {
      this.ns.delete().then((result) => {
        if (result.value) {
          this.prodRef.doc(pid).delete()
            .then(() => {
              this.ns.successSwal("Exito", "Producto eliminado satisfactoriamente")
            })
            .catch((err) => {
              console.log(err)
              this.ns.dangerSwal("Error", "La acción no se completó");
            })
        }
      })
      

    }
}
