import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8W3wlm7Tuya1KO8sb3UiKybQ7WQN5q04",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorResp) => {
          let errorMessage = "An unknown error occured";
          if (!errorResp.error || !errorResp.error.error) {
            return throwError(errorMessage);
          }

          switch (errorResp.error.error.message) {
            case "EMAIL_EXISTS":
              errorMessage = "this email already exists";
          }

          return throwError(errorMessage);
        })
      );
  }
}

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
