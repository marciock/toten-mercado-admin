import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashAdminComponent} from './dash-admin/dash-admin.component';
import {AddMarcasComponent} from './ng-marcas/add-marcas/add-marcas.component';

const routes: Routes = [
  {path:'',component:DashAdminComponent},
  {path:'add_marcas',component:AddMarcasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
