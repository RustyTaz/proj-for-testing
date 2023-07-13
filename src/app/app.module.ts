import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTableComponent } from './components/my-table/my-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
// import {MyTableModule} from 'zyfra-library'
// import {MyTableWrapperModule} from 'my-component-library'


@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    // MyTableModule,
    // MyTableWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
