import {Mailer} from './mailer';

export class AdvanceMailer {

  constructor() {
    console.log('Advance Mailer constructor called');
  }

  send(email: string, message: string) {
    console.log('sending advance email to ' + email);
  }
}
