import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from './../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  randomUser: any;

  constructor(
    private _userProvider: UserProvider
  ) {
  }

  ionViewDidLoad() {
    this.getRandomUser();
  }

  getRandomUser() {
    this._userProvider.getRandomUser()
      .subscribe( data => {
        this.randomUser = {
          name: data['results'][0]['name']['first'] + ' ' + data['results'][0]['name']['last'],
          picture: data['results'][0]['picture']['large']
        };
      });
  }

}
