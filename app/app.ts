import {Component} from '@angular/core';
import {ionicBootstrap, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {LoginPage} from './pages/login/login'; 
import {Data} from './providers/data/data';

declare var firebase: any;

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any;
  //rootPage: any = HomePage;    

  constructor(platform: Platform) {
    /*
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in
          this.rootPage = HomePage;
        } else {
          // No user is signed in
          this.rootPage = LoginPage;
        }
    });
    */

    this.rootPage = LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp,[Data]);
