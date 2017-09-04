import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidenavlist',
  templateUrl: './sidenav-list.component.html'
})

export class SidenavListComponent {
    @Input() menuitems: any[];
    @Input() selecteditem: object;
    
    ngOnInit(){
      console.log(this);
        this.selecteditem = this.menuitems[0];
    }
    
    onItemClick = function(item){
        this.selecteditem = item;
        //this.router.navigate(['/hero']); 
    }
}