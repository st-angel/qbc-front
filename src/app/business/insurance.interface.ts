import { PlanI } from "./plan.interface";

export interface InsuranceI {
  assetName: string;
  price: number;
  percentage: number;

  getYearlyPrice(plan: PlanI, value: number): number;
}

export interface CarI {
  assetId: string;
  assetName: string;
}
