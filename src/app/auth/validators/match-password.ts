import { AbstractControl, FormGroup, Validator } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
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
//AbstractControl means it can be FromControl or FormGroup
//add dependency injection to link class to signup component.
