import { Injectable } from '@angular/core';

import { iUser } from './../../interfaces/user';

@Injectable()
export class UserProvider {

  constructor() {}

  singin(user: any) {
    const cachedUser: iUser = JSON.parse(localStorage.getItem('user'));
    const validUser: boolean = user.user === cachedUser.user && user.psw === cachedUser.psw;
    return validUser;
  }

}
