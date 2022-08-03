import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      my_email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      my_password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      my_checkbox: new FormControl(),
    });
  }

  get my_email() {
    return this.loginForm.get('my_email');
  }

  get my_password() {
    return this.loginForm.get('my_password');
  }

  doLogin() {}
}
