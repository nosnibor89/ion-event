import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { MyApp } from './app.component';
import { TodoState } from '../shared/store/todo/todo.state';
import { ApiService } from '../services/api.service';
import { NoteState } from '../shared/store/note/note.state';
import { DashboardState } from '../shared/store/dashboard/dashboard.state';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxsModule.forRoot([
      TodoState,
      NoteState,
      DashboardState,
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiService,
  ]
})
export class AppModule {}
