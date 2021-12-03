/*
Deprecated : used in the 1st version with the business logic in the front.
 */
import { PlanI } from "./plan.interface";
import { InsuranceI } from "./insurance.interface";

class GlobalPlan implements PlanI {
  name: string = "Global";
  price: number = 0;
  maxTravel: number = 90;
  //maxTravelDuration: DurationE = DurationE.DAYS;
  medicalReimbursement: number = 1000000;
  personalAssistance: number = 5000;
  travelAssistance: number = 1000;
  coverage: number = 1;
  //coverageDuration: DurationE = DurationE.YEARS;

  getYearlyPrice(car: InsuranceI, value: number): number {
    this.price = car.price;

    return this.price;
  }
}

export const GLOBAL_PLAN: PlanI = new GlobalPlan();
