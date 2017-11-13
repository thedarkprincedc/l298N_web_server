import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app';
  selecteditem = {};
  opened = true;
  menuitems = [{
    name: 'Bluetooth',
    icon: 'bluetooth',
    link: 'bluetooth'
  }, {
    name: 'Remote Control',
    icon: 'settings_remote',
    link: 'remote'
  }, {
    name: 'Automated Control',
    icon: 'android',
    link: 'automation'
  }, {
    name: 'Video',
    icon: 'videocam',
    link: 'video'
  }, {
    name: 'About',
    icon: 'info',
    link: 'about'
  }];
}
