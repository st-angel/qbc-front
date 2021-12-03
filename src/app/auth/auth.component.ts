import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

import { AuthService } from "../auth.service";

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  userId: string;
  pass: string;
  formData: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.formData = new FormGroup({
      username: new FormControl(atob("UW92ZXI=")),
      pass: new FormControl(atob("TmluamE="))
    });
  }

  onSubmit(data: any) {
    this.spinnerService.show();
    this.userId = data.username;
    this.pass = data.pass;

    if (
      !this.authService.validateAPI(this.userId, this.pass)?.subscribe(
        (data) => {
          if (data) {
            this.spinnerService.hide();
            this.authService.JWT.next(data.access_token);
            this.authService.AUTH.next({ isLoggedIn: true });
            this.router.navigate(["/quote"]);
          }
        },
        (error) => {
          this.spinnerService.hide();
          //TO DO : Use or create an error service to handle the errors.
          console.log("Error!");
        }
      )
    ) {
      this.spinnerService.hide();
      //TO DO : Use or create an error service to handle the errors.
      console.log("Invalid authentication attempt!");
    }
  }
}
