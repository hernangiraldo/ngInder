import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { UserProvider } from './../../../providers/user/user'

@Component({
  selector: 'singin',
  templateUrl: 'singin.html',
  host: {'class': 'slide'},
  providers: [UserProvider]
})
export class SinginComponent {

  loginForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    private _userProvider: UserProvider
  ) {
    this.loginForm = this.formBuilder.group({
      user: new FormControl('', [ Validators.required ]),
      psw: new FormControl('', [ Validators.required ])
    })
  }

  singIn() {
    const validUser = this._userProvider.singin(this.loginForm.value);

    if (this.loginForm.valid && validUser) {
      this.navCtrl.setRoot('PrivatePage');
    } else {
      let toast = this.toastCtrl.create({
        message: 'El usuario no existe',
        duration: 3000
      });
      toast.present();
    }
  }

}
