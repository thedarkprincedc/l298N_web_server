import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { MdButtonModule, MdCardModule, MdMenuModule,
  MdToolbarModule, MdIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SidenavListComponent } from "./sidenav-list.component"

import { BluetoothViewComponent } from "./bluetooth-view";
import { RemoteControlViewComponent } from "./remote-view";
import { VideoViewComponent } from "./video-view";
import { AboutViewComponent } from "./about-view";

const appRoutes: Routes = [
  { path: 'bluetooth', component: BluetoothViewComponent },
  { path: 'remote', component: RemoteControlViewComponent },
  { path: 'video', component: VideoViewComponent },
  { path: 'about', component: AboutViewComponent },
  { path: '',
    redirectTo: '/bluetooth',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent, SidenavListComponent, 
    BluetoothViewComponent, 
    RemoteControlViewComponent, 
    VideoViewComponent, 
    AboutViewComponent
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
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
