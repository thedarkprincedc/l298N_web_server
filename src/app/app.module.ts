import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SidenavListComponent } from "./components/common/sidenav-list.component"
import { RemoteControlComponent } from "./components/remote/remote-control.component"

import { BluetoothViewComponent } from "./views/bluetooth-view";
import { RemoteControlViewComponent } from "./views/remote-view";
import { VideoViewComponent } from "./views/video-view";
import { AboutViewComponent } from "./views/about-view";
import { AutomatedViewComponent } from "./views/automated-view";
import { BluetoothService } from './services/bluetooth.service';

const appRoutes: Routes = [
  { path: 'bluetooth', component: BluetoothViewComponent },
  { path: 'remote', component: RemoteControlViewComponent },
  { path: 'video', component: VideoViewComponent },
  { path: 'about', component: AboutViewComponent },
  { path: 'automation', component: AutomatedViewComponent },
  { path: '',
    redirectTo: '/bluetooth',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponent,
    BluetoothViewComponent,
    RemoteControlViewComponent,
    RemoteControlComponent,
    VideoViewComponent,
    AboutViewComponent,
    AutomatedViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule, // Add material components to imports array
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [BluetoothService],
  bootstrap: [AppComponent]
})



export class AppModule { }
