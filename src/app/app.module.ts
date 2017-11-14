import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MatButtonModule, MatCardModule, MatMenuModule, MatIconModule, MatSidenavModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SidenavListComponent } from './components/common/sidenav/sidenav-list.component';
import { RemoteControlComponent } from './components/common/remote-control/remote-control.component';

import { BluetoothViewComponent } from './views/bluetooth-view';
import { RemoteControlViewComponent } from './views/remote-view';
import { VideoViewComponent } from './views/video-view';
import { AboutViewComponent } from './views/about-view';
import { AutomatedViewComponent } from './views/automated-view';
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
    MatButtonModule, // Add material components to imports array
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [BluetoothService],
  bootstrap: [AppComponent]
})



export class AppModule { }
