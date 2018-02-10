import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  confirmationOutput: string

  onConfimationOutput(xyz) {
    if (xyz === 'ok') {
      console.log('Delete the video');
    } else {
      console.log('Don\'t delete the video');
    }
  }
}
