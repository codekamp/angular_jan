import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
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
