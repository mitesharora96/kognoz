import {Component} from "@angular/core"

@Component({
    selector:"employee360",
    templateUrl:"./employee360.component.html",
    styleUrls: ['./employee360.component.css']
})

export class employee360{

    employee:any[]=[

        {join_date:'25/10/2015',name:'Mitesh Arora',position:'Full Stack Developer',Department:'Wealth Management',Location:'Singapore'},
        
        {join_date:'09/01/2012',name:'Neha Mattani',position:'Front-end Developer',Department:'Enterprise Management',Location:'Poland'},
        
        {join_date:'25/10/2015',name:'Himanshi Arora',position:'Full Stack Developer',Department:'Wealth Management',Location:'Poland'},
        
        
        ];

}