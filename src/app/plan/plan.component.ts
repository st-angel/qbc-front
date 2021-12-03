import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { QuickquoteComponent } from "../quickquote/quickquote.component";

import { CommService } from "../services/comm-service.service";

import { ExtPlanAPI } from "../business/plan.interface";
import { labels, API } from "../../environments/environment";

@Component({
  selector: "plan",
  inputs: ["selectedPlanName", "plansAPI2"],
  templateUrl: "./plan.component.html",
  styleUrls: ["./plan.component.css"]
})
//TO DO : Constants (f.e. 12.0) should be configurable.
//TO DO : Use Utility Types to represent "Plan" objects.
export class PlanComponent implements OnInit {
  plansAPI2: ExtPlanAPI[] = [];
  selectedPlanName: string;
  planLabels = labels;
  quotes: any[];
  yearlyPrice = false;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly sharedCommService: CommService
  ) {}

  ngOnInit(): void {
    //Subscribe to the shared communication service for messages sent from Quickquote comp
    const price: string[] = [];
    this.sharedCommService.shared.subscribe((data) => {
      //This component only cares about data sent from QuickquoteComponent
      if (data.fromSender === QuickquoteComponent.SHARED_COMM_ID) {
        for (let d of data.sharedData) {
          price.push((d as any).pricePerYear);
        }
      }
    });

    //Get the list of plans
    const req = this.httpClient.get<ExtPlanAPI[]>(API.PLANS);
    req.subscribe((data) => {
      this.plansAPI2 = data;
      this.plansAPI2.forEach((p) => (p.name = p.planName));
      this.plansAPI2.forEach((p) => (p.price = Number(price.shift()) / 12.0));
    });
  }

  choosePlan(plan: string): void {
    console.log(this.selectedPlanName);
    console.log(plan);
    this.selectedPlanName = plan;
  }

  //Switch between the monthly price and yearly price.
  togglePrice() {
    this.yearlyPrice = !this.yearlyPrice;
    if (this.yearlyPrice) {
      this.plansAPI2.forEach((e) => (e.price = e.price * 12));
    } else {
      this.plansAPI2.forEach((e) => (e.price = e.price / 12.0));
    }
  }
}
