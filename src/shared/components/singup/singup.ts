import { Component } from '@angular/core';

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
    private formBuilder: FormBuilder
  ) {
    
    this.singupForm = this.formBuilder.group({
      user: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required, Validators.pattern(REGEX_EMAIL) ]),
      psw: new FormControl('', [ Validators.required ])
    });
  }

  singUp() {
    console.log(this.singupForm);
  }

}
