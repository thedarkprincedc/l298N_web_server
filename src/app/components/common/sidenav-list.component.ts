import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sidenavlist',
    templateUrl: './sidenav-list.component.html',
    styles: [`
        *{
            outline-style: none;
        }
        .selected {
            color: red;
            border-left: 5px red solid;
            background-color:#F6F6FF;
        },
    `],
})

export class SidenavListComponent {
    @Input() menuitems: any[];
    @Input() selecteditem: object;
    router = {};
    constructor(private _router: Router ) {
        console.log(_router);
        this.router = _router;
    }
    ngOnInit(){
      console.log(this);
        this.selecteditem = this.menuitems[0];
    }
    
    onItemClick = function(item){
        this.selecteditem = item;
        //this.router.navigate(['/hero']); 
    }
}