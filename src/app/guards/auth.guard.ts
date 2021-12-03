import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable, of } from "rxjs";

import { AuthService } from "../auth.service";

/* The custom guard prevents access to all routes except /auth for non-authenticated users,
   and access to /auth for authenticated users

   TO DO : don't use plain-text route for /auth, instead use another guard for /auth.
*/
@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isLoggedIn: boolean;
    this.authService.AUTH.subscribe((data) => {
      isLoggedIn = data.isLoggedIn;
    });
    if (state.url === "/auth" || state.url === "") {
      return of(!isLoggedIn);
    }

    return isLoggedIn ? of(isLoggedIn) : of(this.router.parseUrl("/auth"));
  }
}
