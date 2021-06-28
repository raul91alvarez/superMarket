import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvNotificationRoutingModule } from './adv-notification-routing.module';
import { AdvNotificationComponent } from './adv-notification.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  imports: [
    CommonModule,
    AdvNotificationRoutingModule,
    SharedModule,
    SnotifyModule
  ],
  declarations: [AdvNotificationComponent],
  providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults }, SnotifyService]
})
export class AdvNotificationModule { }
