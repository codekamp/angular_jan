import {AbstractControl, ValidationErrors} from '@angular/forms';

export class MyValidators {
  static age(ctrl: AbstractControl): ValidationErrors | null {
    const value = +(ctrl.value);
    if (isNaN(ctrl.value)) {
      return {'nan': 'Age should be a number'};
    } else if (value > 150) {
      return {'max': 'Age should be 150 max'};
    } else if (value < 12) {
      return {'min': 'Age should be atleast 12'};
    }

    return null;
  }
}
