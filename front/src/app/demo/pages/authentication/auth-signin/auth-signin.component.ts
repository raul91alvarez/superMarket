import { IAuthentications } from './../../../../addons/interfaces/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../../../../addons/services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  public form: FormGroup;


  constructor( private _cookie: CookieService ,private authServ: AuthenticationService, private _formbuilder: FormBuilder) { 
    this.form = _formbuilder.group({
      user:['',Validators.required],
      pass:['',Validators.required],
      remember:[false],
    });

    this.form.controls.user.setValue(this.userCookies);
    this.form.controls.pass.setValue(this.passCookies);
    this.form.controls.remember.setValue(this.rememberCookies);
  }

  
  public get dataForm() : IAuthentications {
    return {
      user: this.form.controls.user.value,
      password: this.form.controls.pass.value,
    }
  }
  

  ngOnInit() {
  }

  submit(){
    if (this.form.controls.remember.value) {
      this._cookie.set('user',`${this.form.controls.user.value}`);
      this._cookie.set('pass',`${this.form.controls.pass.value}`);
      this._cookie.set('remember',`${this.form.controls.remember.value}`);
    } else{ this._cookie.deleteAll()}
    this.authServ.loginEmailUser(this.dataForm);
  }

  public get userCookies() : string {
    let user = this._cookie.get('user');
    if (user) {
      return user
    }else{ return ''}
  }
  public get passCookies() : string {
    let pass = this._cookie.get('pass');
    if (pass) {
      return pass
    }else{ return ''}
  }
  public get rememberCookies() : string {
    let pass = this._cookie.get('remember');
    if (pass) {
      return pass
    }else{ return ''}
  }

}
