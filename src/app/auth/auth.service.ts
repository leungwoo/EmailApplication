import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';

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
    return this.http.post<SignupResponse>(
      this.rootUrl + '/auth/signup',
      credentials
    );
  }
}
