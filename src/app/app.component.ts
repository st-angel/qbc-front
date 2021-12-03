import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Qover Quickquote - CodeSandbox";
  isLoggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.AUTH.subscribe((data) => {
      this.isLoggedIn = data.isLoggedIn;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate([""]);
  }
}
