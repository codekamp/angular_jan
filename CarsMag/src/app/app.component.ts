import {AfterViewInit, Component, DoCheck, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  constructor() {

  }

  ngOnInit() {

  }

  ngDoCheck() {
    console.log('AppComponent ngDoCheck');
  }

  doNothing() {

  }
}
