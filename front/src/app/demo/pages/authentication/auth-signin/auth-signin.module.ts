import { AuthenticationService } from './../../../../addons/services/authentication/authentication.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSigninRoutingModule } from './auth-signin-routing.module';
import { AuthSigninComponent } from './auth-signin.component';

// addons
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    AuthSigninRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers:[AuthenticationService, CookieService ],
  declarations: [AuthSigninComponent]
})
export class AuthSigninModule { }
