import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from '../my-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @ViewChild('xyz') usernameField: ElementRef;
  // @ViewChild('pqr') passwordField: ElementRef;

  usernameControl = new FormControl(null, [MyValidators.age]);
  passwordControl = new FormControl(null, [Validators.required]);

  loginFormGroup: FormGroup;

  username: number;

  constructor() {
    this.loginFormGroup = new FormGroup({
      username: this.usernameControl,
      password: this.passwordControl
    });
  }

  ngOnInit() {
  }

  login() {
    // console.log('form submitted', this.usernameField.nativeElement.value,
    //   this.passwordField.nativeElement.value);
    //
    // this.usernameField.nativeElement.value = 'CodeKamp';


    console.log(this.loginFormGroup.value);

    const errors = Validators.email(this.usernameControl);
  }


  increment() {
    this.username++;
  }
}
