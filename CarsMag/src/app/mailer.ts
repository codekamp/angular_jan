import {Injectable} from '@angular/core';

@Injectable()
export class Mailer {
  constructor() {
    console.log('Mailer constructor called');
  }

  send(email: string, message: string) {
    console.log('sending email to ' + email);
  }
}
