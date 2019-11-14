import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginDetails = {
    email: '',
    password: ''
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('User login details: ', this.loginDetails);
    this.router.navigate(['/Dashboard/Admin']);
  }

}
