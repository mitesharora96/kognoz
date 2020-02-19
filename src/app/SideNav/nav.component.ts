import{Component,Output,EventEmitter} from "@angular/core"

@Component({
    selector:"mynav",
    templateUrl:"./nav.component.html",
    styleUrls: ['./nav.component.css']
})

export class Nav{

    NavPageSelected:string='home';

    @Output()
    NavPageSelectionChange:EventEmitter<string>=new EventEmitter<string>();

    OnNavChange(value:string):void{ 
        this.NavPageSelectionChange.emit(value);
        console.log(value);
    }



}