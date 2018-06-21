import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private loginService: LoginService, private _router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }
  validateLogin() {
    const isValid = this.loginService.validateLogin(this.loginForm.value);
    if (isValid) {
      this._router.navigate(['search']);
    } else {
      alert('Invalid Login');
    }
  }


}
