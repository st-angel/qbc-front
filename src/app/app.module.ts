import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";

import { AppComponent } from "./app.component";
import { PlanComponent } from "./plan/plan.component";
import { QuickquoteComponent } from "./quickquote/quickquote.component";
import { AuthComponent } from "./auth/auth.component";

import { ALL_HTTP_INTERCEPTORS_PROVIDERS } from "./http-interceptors/barrel";

@NgModule({
  imports: [
    NzInputModule,
    NzSwitchModule,
    NzButtonModule,
    NzSelectModule,
    NzInputNumberModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    QuickquoteComponent,
    PlanComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ALL_HTTP_INTERCEPTORS_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
