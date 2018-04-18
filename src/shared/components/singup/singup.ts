import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { REGEX_EMAIL } from './../../../providers/utils/utils'

@Component({
  selector: 'singup',
  templateUrl: 'singup.html',
  host: {'class': 'slide'}
})
export class SingupComponent {

  singupForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    
    this.singupForm = this.formBuilder.group({
      user: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required, Validators.pattern(REGEX_EMAIL) ]),
      psw: new FormControl('', [ Validators.required ])
    });
  }

  singUp() {
    if (this.singupForm.valid) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('loggedUser', JSON.stringify(this.singupForm.value));
      this.navCtrl.setRoot('PrivatePage');
    }
  }

}
