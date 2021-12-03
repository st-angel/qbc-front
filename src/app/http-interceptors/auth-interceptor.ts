/*
  The AuthInterceptor will copy the JWT token to the header of every request except the initial auth request.
*/
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let jwt = "";
    this.authService.JWT?.subscribe((data) => {
      jwt = data;
    });
    if (jwt) {
      const newReq = req.clone({
        setHeaders: { Authorization: `Bearer ${jwt}` }
      });

      return next.handle(newReq);
    }

    return next.handle(req);
  }
}
