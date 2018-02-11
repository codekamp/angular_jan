import {Component} from '@angular/core';
import {Mailer} from './mailer';
import {AdvanceMailer} from './advance-mailer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  confirmationOutput: string;

  constructor(qwqlwh: Mailer) {
    console.log('AppComponent constrcutor called');
  }

  onConfimationOutput(xyz) {
    if (xyz === 'ok') {
      console.log('Delete the video');
    } else {
      console.log('Don\'t delete the video');
    }
  }
}
