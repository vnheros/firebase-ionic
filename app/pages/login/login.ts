import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FbAuth } from '../../providers/fb-auth/fb-auth';

//declare var firebase: any;
//declare var FB: any;

@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [FbAuth]
})

export class LoginPage {

  constructor(private navCtrl: NavController, private fbauth: FbAuth) {
    //FB.Event.subscribe('auth.authResponseChange', this.checkLoginState);
  }

  goToFacebookLogin() {
    this.fbauth.startOAuthFlow();
  }

}
