import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mailer} from '../mailer';
import {GOOGLE_ANALYTICS_ID} from '../constants';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  @Input() message = 'Are you sure?';
  @Input() okText = 'Yes, please!';
  @Input() cancelText = 'No No!';

  @Output() ok = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(private xyz: Mailer, @Inject('GOOGLE_ANALYTICS_ID') private gid: number) {
    console.log('ConfirmationComponent constructor callled');
  }

  ngOnInit() {
    this.xyz.send('prashant@codekamp.in', 'Hello world!');
  }

  okButtonClicked() {
    console.log('okButtonClicked');
    this.ok.emit();
  }

  cancelButtonClicked() {
    console.log('cancelButtonClicked');
    this.cancel.emit();
  }
}
