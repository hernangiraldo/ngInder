import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-private',
  templateUrl: 'private.html',
})
export class PrivatePage {

  privateRootPage: any;

  constructor(
    public navCtrl: NavController
  ) {
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
    this.navCtrl.setRoot('HomePage');
  }

}
