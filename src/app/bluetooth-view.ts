import { Component, Input } from '@angular/core';

@Component({
  selector: 'bluetoothview',
  templateUrl: './bluetooth-view.html'
})

export class BluetoothViewComponent {
    @Input() selecteditem: object;
    
    ngOnInit(){
      console.log("Dkmkdd");
      console.log(this.selecteditem);
    }
    
    onItemClick = function(item){

    }
}