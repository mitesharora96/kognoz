import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  Job_Desc:boolean=false;
  employee360:boolean=false;
  home:boolean=true;
  NavSelected:string='home';
  

  OnNavChange(NavSelection:string):void{
    this.NavSelected=NavSelection;

    if(this.NavSelected=='Manage Job description')
      {  this.Job_Desc=true;
          this.home=false;
          this.employee360=false;
      }

      if(this.NavSelected=='Employee 360')
      {  this.employee360=true;
          this.home=false;
          this.Job_Desc=false
      }
  }

  onHomeClick():void{
    this.Job_Desc=false;
  this.employee360=false;
  this.home=true;
  } 

}
