import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  
  isAuth: boolean = false;
  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private auth_service:AuthService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.username = new FormControl('');
    this.password = new FormControl('');
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  onSubmitLogin() {
    var sha256 = require('sha-256-js');
    // console.log("String: " + sha256("1234"));
    this.auth_service.authenticate(
      {
        username: this.username.value,
        password: sha256(this.password.value)
      }
    );
  }
}
