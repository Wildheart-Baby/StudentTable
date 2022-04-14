import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogService, DynamicDialogComponent} from 'primeng/dynamicdialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentTableComponent } from './student-table/student-table.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    StudentDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule, 
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
