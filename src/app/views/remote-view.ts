import { Component, Input } from '@angular/core';

@Component({
  selector: 'remoteview',
  templateUrl: './remote-view.html'
})

export class RemoteControlViewComponent {
  onKey = function(event){
    console.log(event);
  }
}