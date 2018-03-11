import {ChangeDetectionStrategy, Component, DoCheck, HostBinding, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from '../my-validators';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {EVENT_STUDENT_ADDED, EventBus, helloWorld} from '../services/event-bus.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {

  @HostBinding('class.xyz') something = true;

  loading = false;
  usernameControl = new FormControl(null, [Validators.email]);
  passwordControl = new FormControl(null, [Validators.required]);

  loginFormGroup: FormGroup;

  countChanges = new Subject<number>();

  count = 0;

  @HostListener('click') doSomething = () => {
    console.log('apl login clicked');
  }

  constructor(private eventBus: EventBus) {
    this.loginFormGroup = new FormGroup({
      username: this.usernameControl,
      password: this.passwordControl,
    });

    helloWorld();

    this.eventBus.on(EVENT_STUDENT_ADDED)
      .subscribe(data => console.log('received event', data));
  }

  ngDoCheck() {
    console.log('LoginComponent ngDoCheck');
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
    this.loading = !this.loading;
  }

  increment() {
    this.count++;
  }

  onChange(event) {
    this.count = +(event.srcElement.value);
  }
}
