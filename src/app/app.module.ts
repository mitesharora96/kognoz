import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Nav} from './SideNav/nav.component';
import {jobDescription} from './main/JobDescription/jobDescpirtion.component'
import {employee360} from './main/JobDescription/Employee360/employee360.component'

@NgModule({
  declarations: [
    AppComponent,Nav,jobDescription,employee360
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
