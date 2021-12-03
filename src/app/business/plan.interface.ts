import { InsuranceI } from "./insurance.interface";

export enum DurationE {
  DAYS = "days",
  WEEKS = "week(s)",
  MONTHS = "month(s)",
  YEARS = "year"
}

export interface PlanI {
  name: string;
  price: number;
  maxTravel: number;
  //maxTravelDuration: DurationE;
  medicalReimbursement: number;
  personalAssistance: number;
  travelAssistance: number;
  coverage: number;
  //coverageDuration: DurationE;

  getYearlyPrice(asset: InsuranceI, value: number): number;
}

export interface PlanAPI {
  //_id: string;
  //planId: string;
  planName: string;
  maxTravel: number;
  //maxTravelDuration: DurationE;
  medicalReimbursement: number;
  personalAssistance: number;
  travelAssistance: number;
  coverage: number;
  //coverageDuration: DurationE;
  //percentageMultiplier: number;
}

export interface ExtPlanAPI extends PlanAPI {
  name: string;
  price: number;
}
