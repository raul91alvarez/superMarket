import { SnotifyModule,SnotifyService, ToastDefaults } from 'ng-snotify';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserCreateComponent } from './user-create/user-create/user-create.component';

@NgModule({
  declarations: [UserCreateComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SnotifyModule
  ],
  providers:[{ provide: 'SnotifyToastConfig', useValue: ToastDefaults }, SnotifyService]
})
export class UsersModule { }
