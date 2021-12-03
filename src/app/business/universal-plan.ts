/*
Deprecated : used in the 1st version with the business logic in the front.
 */
import { PlanI } from "./plan.interface";
import { InsuranceI } from "./insurance.interface";

class UniversalPlan implements PlanI {
  name: string = "Universe";
  price: number = 0;
  maxTravel: number = 180;
  //maxTravelDuration: DurationE = DurationE.DAYS;
  medicalReimbursement: number = 3000000;
  personalAssistance: number = 10000;
  travelAssistance: number = 2500;
  coverage: number = 1;
  //coverageDuration: DurationE = DurationE.YEARS;

  getYearlyPrice(car: InsuranceI, value: number): number {
    this.price = car.price + 0.01 * car.percentage * value;

    return this.price;
  }
}

export const UNIVERSAL_PLAN: PlanI = new UniversalPlan();
