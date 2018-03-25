import {Component, DoCheck, HostBinding, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {EventBus, helloWorld} from '../services/event-bus.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {InvidzService} from '../services/invidz';

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

  allError = [
    'You need to login to read article',
    'You need to login add an article'
  ];

  error: string;

  alive: boolean;

  @HostListener('click') doSomething = () => {
    console.log('apl login clicked');
  }


  constructor(private eventBus: EventBus, private route: ActivatedRoute,
              private http: HttpClient, private invidzService: InvidzService) {
    this.alive = true;
    this.loginFormGroup = new FormGroup({
      email: this.usernameControl,
      password: this.passwordControl,
    });

    helloWorld();

    this.eventBus.on('articleChanged')
      .takeWhile(() => this.alive).subscribe(data => console.log('received event', data));

    // const myObs$ = Observable.interval(100);
    //
    // myObs$.takeWhile(value => value < 10 || value > 15)
    //   .subscribe(value => console.log('value is ' + value));
    //
    // myObs$.subscribe();
  }

  ngDoCheck() {
    // console.log('LoginComponent ngDoCheck');
  }

  ngOnInit() {
    // this.usernameControl.valueChanges.filter(a => a.length >= 3)
    //   .debounceTime(300).distinctUntilChanged().subscribe(a => {
    //   console.log('search for ' + a);
    // });


    // const original = this.usernameControl.valueChanges;
    //
    // const modified = original.map(a => Observable.from([a.length, a.length * 10]));
    //
    // modified.subscribe(a => console.log('modified', a));
    //
    // original.subscribe(a => console.log('user typed ' + a));
    //
    // this.route.queryParams.subscribe(qp => {
    //   this.error = this.allError[+qp['reason'] - 1];
    // });
  }

  login() {
    this.loading = true;
    this.invidzService.login(this.loginFormGroup.value).subscribe(pqr => {
      console.log(pqr.first_name);
    });
  }

  increment() {
    this.count++;
  }

  onChange(event) {
    this.count = +(event.srcElement.value);
  }

  onDestroy() {
    this.alive = false;
  }
}

// /articles
// GET - get list of summary of all articles
// POST - add new article

// /articles/:id
// GET - get detail of the article
// PUT - edit the article
// PATCH - partically edit the article
// DELETE - Delete the article


// 1. What data?
// 2. In what keys?
// 3. Where? path/query params/header/body (GET can't have body)
// 4. What format? (only if data is to be sent in body)


// http://codekamp.in/login/prashant/hello - PATH
// http://codekamp.in/login?uname=prashant&pswd=hello - query params
