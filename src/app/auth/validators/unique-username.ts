import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl) => {
    const { value } = control;

    return this.authService.usernameAvailbale(value).pipe(
      map((value) => {
        if (value.available) {
          console.log(value);
          return control.value;
        }
      }),
      catchError((err) => {
        console.log(err);
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}

// we use dependency injection ONLY so that we can use the constructor
