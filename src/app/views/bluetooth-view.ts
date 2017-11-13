import { Component, Input } from '@angular/core';
import { BluetoothService } from '../services/bluetooth.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
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
    selecteddevice = {}
    bluetoothStream: Observable<any>;
    bluetoothSub: Subscription;

    devices = [];
    constructor(private _bluetoothService: BluetoothService ) {
      this.bluetoothStream = this._bluetoothService.listen('ON_CONNECTED');
      this.bluetoothSub = this.bluetoothStream.subscribe(res => {
        console.log(res);
        if(res){
          this.devices = res;
        }
      });
    }
    onItemClick = function(item){
      item.connected = (item.connected) ? false : true;
      this._bluetoothService.send({
        msg: (item.connected) ? "pair" : "disconnect",
        deviceid: item.deviceid
      });
    }
}
