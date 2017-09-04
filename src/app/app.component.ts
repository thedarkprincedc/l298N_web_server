import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selecteditem = {};
  menuitems = [{
    name: 'Bluetooth',
    icon: 'bluetooth',
    link: 'bluetooth'
  },{
    name: 'Remote Control',
    icon: 'settings_remote',
    link: 'remote'
  },{
    name: 'Video',
    icon: 'videocam',
    link: 'video'
  },{
    name: 'About',
    icon: 'info',
    link: 'about'
  }];
  bluetoothdevicelist = [
    {
      name: "PS3 GamePad",
      deviceid: "00:00:33:23",
      connected: true
    },
    {
      name: "Device 2",
      deviceid: "00:00:33:23",
      connected: true
    },
    {
      name: "Device 4",
      deviceid: "00:00:33:23",
      connected: true
    }
  ];
  
  
}
