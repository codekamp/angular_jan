import {AfterViewInit, Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(LoginComponent) xyz: LoginComponent;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.xyz.countChanges.subscribe(a => console.log('value from login component ' + a));
  }
}
