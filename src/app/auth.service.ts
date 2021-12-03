import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { catchError, delay } from "rxjs/operators";

import { environment, API } from "../environments/environment";

@Injectable({ providedIn: "root" })
export class AuthService {
  isUserAuthenticated: boolean = false;
  private readonly jwt: BehaviorSubject<string>;
  private readonly auth: BehaviorSubject<{ isLoggedIn: boolean }>;

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private readonly httpClient: HttpClient) {
    this.jwt = new BehaviorSubject("JWT");
    this.auth = new BehaviorSubject({ isLoggedIn: false });
  }
  /*
  validate(user: string, pass: string): Observable<any> {
    if (!user) {
      return null;
    }

    //const isValid =  bcrypt.compare(pass, environment.secret);
    let isValid = user === environment.authid && pass === environment.plain;

    if (isValid) {
      this.isUserAuthenticated = true;
      localStorage.setItem("auth", this.isUserAuthenticated ? "true" : "false");

      return of(this.isUserAuthenticated).pipe(delay(1000));
    }

    return null;
  }
  */

  validateAPI(user: string, pass: string): Observable<any> {
    const resp: any = this.httpClient.post(
      API.AUTH,
      {
        username: user,
        password: pass
      },
      this.httpOptions
    );
    return resp;
    //.pipe(catchError(this.handleErr({})));
    /*
    if (resp) {
      this.isUserAuthenticated = true;
      localStorage.setItem("auth", this.isUserAuthenticated ? "true" : "false");
      console.log(resp.body);
      return of(this.isUserAuthenticated).pipe(delay(1000));
    }
    
    return null;
    */
  }

  logout(): void {
    //TO DO : Call the logout API on the back-end
    this.auth.next({ isLoggedIn: false });
  }

  handleErr(err: any) {
    console.log("error");
    return {
      err: err,
      caught: of()
    };
  }

  get JWT(): BehaviorSubject<string> {
    return this.jwt;
  }

  get AUTH(): BehaviorSubject<{ isLoggedIn: boolean }> {
    return this.auth;
  }
}
