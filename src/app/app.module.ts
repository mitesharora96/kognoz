import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router'

const appRoutes:Routes=[
  {path:'',component:home},
  {path:'home',component:home},
  {path:'Jobdescription',component:jobDescription},
  {path:'Assessment',component:assessment},
  {path:'Employee' , component:employee360},
  {path:'Manager',component:ManagerInsights},
  {path:'Webmail' ,component:webmail},
  {path:'Task' ,component:Task}
]


import { AppComponent } from './app.component';
import {Nav} from './SideNav/nav.component';
import {jobDescription} from './main/JobDescription/jobDescpirtion.component'
import {employee360} from './main/JobDescription/Employee360/employee360.component'
import {ManagerInsights} from './main/ManagerInsights/ManagerInsights.component'
import {assessment} from './main/Assessment/assessment.component'
import {Task} from './main/Task/task.component'
import {webmail} from './main/Webmail/webmail.component'
import { home } from './home.component';

@NgModule({
  declarations: [
    home,AppComponent,Nav,jobDescription,employee360,ManagerInsights,assessment,Task,webmail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
