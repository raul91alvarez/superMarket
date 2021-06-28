import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnComponent } from './own/own.component';

const routes: Routes = [
  {path:'landingPage', component: LandingPageComponent },
  {path:'own', component: OwnComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
