import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMarcasComponent } from './ng-marcas/ng-marcas.component';
import { AddMarcasComponent } from './add-marcas/add-marcas.component';
import { EditMarcasComponent } from './edit-marcas/edit-marcas.component';



@NgModule({
  declarations: [
    NgMarcasComponent,
    AddMarcasComponent,
    EditMarcasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgMarcasModule { }
