import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}
interface UsernameAvailableResponse {
  available: boolean;
}
interface SignedinResponse {
  authenticated: boolean;
  username: string;
}
interface SignedOut {
  authenticated: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  usernameAvailbale(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      this.rootUrl + '/auth/username',
      {
        username,
      }
    );
  }
  signup(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(this.rootUrl + '/auth/signup', credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
  checkAuth() {
    return this.http
      .get<SignedinResponse>(this.rootUrl + '/auth/signedin')
      .pipe(
        tap(({ authenticated }) => {
          this.signedin$.next(authenticated);
        })
      );
  }

  signout() {
    return this.http.post<SignedOut>(this.rootUrl + '/auth/signout', {}).pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }
}

//withCredentials:true .... saves the cookie to help  keep the user signed in info
// used the interceptor to remove (withCredentials:true) from the http method arguments
