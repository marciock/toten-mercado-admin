import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonPlusComponent } from './button-plus/button-plus.component';
import { CardMenuComponent } from './card-menu/card-menu.component';
import { TableViewComponent } from './table-view/table-view.component';



@NgModule({
  declarations: [
    NavBarComponent,
    ButtonPlusComponent,
    CardMenuComponent,
    TableViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    ButtonPlusComponent,
    CardMenuComponent,
    TableViewComponent
  ]
})
export class NgWidgetsModule { }
