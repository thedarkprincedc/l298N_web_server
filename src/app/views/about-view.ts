import { Component, Input } from '@angular/core';

@Component({
  selector: 'aboutview',
  templateUrl: './about-view.html'
})

export class AboutViewComponent {
  vm = {
    name: "PiDroneL295N",
    createdby: "thedarkprincedc"
  }
}