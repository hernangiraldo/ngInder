import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { iUser } from './../../interfaces/user';

@IonicPage()
@Component({
  selector: 'page-private',
  templateUrl: 'private.html',
})
export class PrivatePage {

  privateRootPage: any;
  currentUser: iUser;

  constructor(
    public navCtrl: NavController
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('loggedUser'));
  }

  ionViewDidLoad() {
    this.privateRootPage = 'DashboardPage';
  }

  goTo(_page: number) {
    const page = ({
      1: 'UserProfilePage',
      2: 'DashboardPage'
    })[_page];

    this.privateRootPage = page;
  }

  logout() {
    localStorage.setItem('auth', 'false');
    localStorage.setItem('loggedUser', '');
    this.navCtrl.setRoot('HomePage');
  }

}
