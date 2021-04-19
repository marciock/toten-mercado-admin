import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgWidgetsModule} from './ng-widgets/ng-widgets.module';
import { DashAdminComponent } from './dash-admin/dash-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashAdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
