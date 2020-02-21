import {Component} from "@angular/core"

@Component({
    selector:'jobDescription',
    templateUrl:'./jobDescription.component.html',
    styleUrls: ['./jobDescription.component.css']

})

export class jobDescription{

       TableView:boolean=true;
       AddJobView:boolean=false; 

    job:any[]=[
        {Job_id:'42563',Title:'Andriod Engineer', Department:'Engineering', Location:'Pune', Status:'In Progress', Date_posted:'11h Dec 19',Experience:'2-4ys',Blank:' '},
        {Job_id:'42563',Title:'Andriod Engineer', Department:'Engineering', Location:'Pune', Status:'Completed', Date_posted:'11h Dec 19',Experience:'2-4ys',Blank:' '},
        {Job_id:'42563',Title:'Andriod Engineer', Department:'Engineering', Location:'Pune', Status:'Yet to start', Date_posted:'11h Dec 19',Experience:'2-4ys',Blank:' '},
        {Job_id:'42563',Title:'Andriod Engineer', Department:'Engineering', Location:'Pune', Status:'In Progress', Date_posted:'11h Dec 19',Experience:'2-4ys',Blank:' '},
        {Job_id:'42563',Title:'Andriod Engineer', Department:'Engineering', Location:'Pune', Status:'Yet to start', Date_posted:'11h Dec 19',Experience:'2-4ys',Blank:' '},
        {Job_id:'42563',Title:'Andriod Engineer', Department:'Engineering', Location:'Pune', Status:'In Progress', Date_posted:'11h Dec 19',Experience:'2-4ys',Blank:' '},
        {Job_id:'42563',Title:'Andriod Engineer', Department:'Engineering', Location:'Pune', Status:'Completed', Date_posted:'11h Dec 19',Experience:'2-4ys',Blank:' '}, 
        {Job_id:'42563',Title:'Andriod Engineer', Department:'Engineering', Location:'Pune', Status:'In Progress', Date_posted:'11h Dec 19',Experience:'2-4ys',Blank:' '},
        {Job_id:'42563',Title:'Andriod Engineer', Department:'Engineering', Location:'Pune', Status:'Completed', Date_posted:'11h Dec 19',Experience:'2-4ys',Blank:' '},    
    ];

    newJob={
         Job_id:'',Title:'', Department:'', Location:'', Status:'', Date_posted:'',Experience:'',Blank:' '
    };
    OnAddJobClcik():void{
        this.TableView=false;
        this.AddJobView=true;

    }

    OnNewJobAdded():void{
        this.job=this.job.concat(this.newJob);
        this.TableView=true;
        this.AddJobView=false;

    }
}