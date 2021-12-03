import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { QuickquoteComponent } from "./quickquote/quickquote.component";
import { PlanComponent } from "./plan/plan.component";

import { AuthGuard } from "../app/guards/auth.guard";

//Defines the application routes.
const routes: Routes = [
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  { path: "auth", component: AuthComponent, canActivate: [AuthGuard] },
  { path: "quote", component: QuickquoteComponent, canActivate: [AuthGuard] },
  { path: "plan", component: PlanComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
