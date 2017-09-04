import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidenavlist',
  templateUrl: './sidenav-list.component.html'
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