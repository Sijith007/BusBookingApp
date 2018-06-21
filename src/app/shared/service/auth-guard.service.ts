import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    return JSON.parse(localStorage.getItem('user')) ? true : false;
  }

}
