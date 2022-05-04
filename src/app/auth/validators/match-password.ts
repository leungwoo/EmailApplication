import { AbstractControl, FormGroup, Validator } from '@angular/forms';

export class MatchPassword implements Validator {
  validate(formGroup: AbstractControl) {
    const { password, passwordConfirmation } = formGroup.value;

    if (password === passwordConfirmation) {
      return null;
    } else {
      return { passwordDontMatch: true };
    }
  }
}
