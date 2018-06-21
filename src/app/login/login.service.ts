import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  validateLogin(params) {
    debugger;
    if (params.username == 'sijith' && params.password == 'sijith') {
      params.id = 1;
    } else if(params.username == 'bala' && params.password == 'bala') {
      params.id = 2;
    } else {
      return false;
    }
    localStorage.setItem('user', JSON.stringify(params));
    return true;
  }

  getLoggedUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

}
