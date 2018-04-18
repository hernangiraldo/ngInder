import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      const auth = JSON.parse(localStorage.getItem('auth'));
      let registeredUser = {
        user: 'aherrrera',
        email: 'aherrera@mail.com',
        psw: '123456'
      }
      localStorage.setItem('user', JSON.stringify(registeredUser));

      if (auth) {
        this.rootPage = 'PrivatePage';
      } else {
        this.rootPage = 'HomePage';
      }
    });
  }
}

