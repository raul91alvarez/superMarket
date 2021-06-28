import { AngularFireAuth } from '@angular/fire/auth';
import { NotificationsService } from './../notifications/notifications.service';
import { IUserInterface, IAuthentications } from './../../interfaces/user';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private usersRef: AngularFirestoreCollection<IUserInterface> = null;
  private authRef = "users";


  constructor(
    private zone: NgZone,
    private router: Router,
    private afsAuth: AngularFireAuth,
    private dbUsers: AngularFirestore,
    private ns: NotificationsService,
  ) { this.usersRef = dbUsers.collection(this.authRef); }

  //******generate cripto random value*******
  dec2hex(dec) {
    return ('0' + dec.toString(16)).substr(-2)
  }

  // generateId :: Integer -> String
  generateid(len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, this.dec2hex).join('')
  }


  // login user
  loginEmailUser(data: IAuthentications) {
    console.log(data);
    return this.afsAuth.setPersistence('local')
      .then(() => {
        return this.afsAuth.signInWithEmailAndPassword(data.user, data.password)
          .then(() => {
            sessionStorage.setItem('userState', "true");
            this.router.navigateByUrl('');
          })
          .catch(() => {
            this.ns.dangerSwal("Error!", "Verifique sus credenciales");
          })
      })

  }

  //logout
  logoutUser() {
    this.afsAuth.signOut()
    .then((res) => {
        console.log(res);
        sessionStorage.clear(); 
        this.router.navigateByUrl('/logout');
        
       })
      .catch(() => { alert('No se pudo ejecutar el logout') });

  }

  //check if is auth and redirect at app.component, then this component redirect at login
  isAuth(): Observable<object> {
    return this.afsAuth.authState;
  }

  // get profile user 
  getUser() {
    return this.afsAuth.user;
  }


  //create user from firestore to authentication firebase
  addUsers(data: IUserInterface) {
    this.usersRef.doc(data.uid).set({
      uid: data.uid,
      email: data.email,
      displayName: data.displayName,
      password: data.password,
      disabled: data.disabled,
      date: data.date
    })
      .then(() => {
        this.ns.successSwal("Exito", "Usuario creado");
      })
      .catch((err) => {

        this.ns.dangerSwal("Error", "No se pudo ejecutar a acción");
        console.log(err);
      })
  }

  // clean data of users from DB
  deleteUsers(cid: string) {
    this.ns.delete().then((result) => {
      if (result.value) {
        this.usersRef.doc(cid).delete()
          .then(() => {
            this.ns.successSwal("Exito", "Usuario eliminado satisfactoriamente")
          })
          .catch((err) => {
            console.log(err)
            this.ns.dangerSwal("Error", "La acción no se completó");
          })
      }
    })
  }

  //update user 
  updateUser(user: IUserInterface) {
    this.usersRef.doc(user.uid).update({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      password: user.password,
      disabled: user.disabled,
    })
      .then(() => {
        this.ns.successSwal("Exito", "Usuario actualizado");
      })
      .catch((err) =>
        console.log(err));
  }

  //list user in table
  getListUsers() {
    return this.usersRef;
  }

}
