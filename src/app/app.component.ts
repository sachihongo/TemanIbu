/* tslint:disable:no-string-literal */
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/tabs/home',
      icon: 'home'
    },
    {
      title: 'Chat',
      url: '/chat',
      icon: 'chatboxes'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'alert'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  exit() {
    this.authService.logoutUser()
        .then(res => {
          console.log(res);
          navigator['app'].exitApp();
        })
        .catch(error => {
          console.log(error);
        })
  }
}
