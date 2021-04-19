import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashAdminComponent} from './dash-admin/dash-admin.component';

const routes: Routes = [
  {path:'',component:DashAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
