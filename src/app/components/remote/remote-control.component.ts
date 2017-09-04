import { Component, Input } from '@angular/core';

@Component({
  selector: 'remotecontrol',
  templateUrl: './remote-control.component.html'
})

export class RemoteControlComponent {
  forward = () => {
    console.log("ddddddcrc");
  }
  backward = () => {

  }
  rotate = (direction) => {

  }
}