import { Component, Input } from '@angular/core';
import { BluetoothService } from './services/bluetooth.service';
@Component({
  selector: 'bluetoothview',
  templateUrl: './bluetooth-view.html',
  styles: [`
    .success {
      color: green;
    }
    md-list-item:hover{
      background-color: #CC0000;
      color: white;
    }
  `],
})

export class BluetoothViewComponent {
    /*@Input() selecteditem: object;
    
    ngOnInit(){
      console.log("Dkmkdd");
      console.log(this.selecteditem);
    }
    */
    selecteddevice = {}
    devices = [{
      name: "PS3 Gamepad",
      deviceid: "00:33:23:44",
      connected: true
    },{
      name: "Unknown Device",
      deviceid: "00:33:23:44",
      connected: false
    }];

    constructor(private _bluetoothService: BluetoothService ) {

    }
    onItemClick = function(item){
      item.connected = (item.connected) ? false : true;
      console.log(item);
      this._bluetoothService.send("ergiuernguerngeg");
    }
}