import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Store } from '@ngxs/store';

import Pages from '../pages/pages';
import { fetchTodos } from '../shared/store/todo/todo.actions';
import { fetchNotes } from '../shared/store/note/note.actions';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Pages.TABS_PAGE;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, store: Store) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // fetch data
      store.dispatch([
        new fetchTodos(), 
        new fetchNotes(),
      ]);
    });
  }
}

