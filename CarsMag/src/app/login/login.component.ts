import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from '../my-validators';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameControl = new FormControl(null, [MyValidators.age]);
  passwordControl = new FormControl(null, [Validators.required]);

  loginFormGroup: FormGroup;

  countChanges = new Subject<number>();

  count = 0;

  constructor() {
    this.loginFormGroup = new FormGroup({
      username: this.usernameControl,
      password: this.passwordControl
    });
  }

  ngOnInit() {
    // this.usernameControl.valueChanges.filter(a => a.length >= 3)
    //   .debounceTime(300).distinctUntilChanged().subscribe(a => {
    //   console.log('search for ' + a);
    // });


    const original = this.usernameControl.valueChanges;

    const modified = original.map(a => Observable.from([a.length, a.length * 10]));

    modified.subscribe(a => console.log('modified', a));

    original.subscribe(a => console.log('user typed ' + a));
  }

  login() {
  }

  increment() {
    this.count++;
    this.countChanges.next(this.count);
  }
}
