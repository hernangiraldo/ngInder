import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { iUser } from './../../interfaces/user';

@Injectable()
export class UserProvider {

  constructor(
    private http: HttpClient
  ) {}

  singin(user: any) {
    const cachedUser: iUser = JSON.parse(localStorage.getItem('user'));
    const validUser: boolean = user.user === cachedUser.user && user.psw === cachedUser.psw;
    return validUser;
  }

  getRandomUser() {
    return this.http.get('https://randomuser.me/api/?results=');
  }

}
