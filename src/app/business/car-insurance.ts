/*
  Deprecated : these objects were used in the 1st version with the business logic in the front.
*/
import { InsuranceI } from "./insurance.interface";

import { PlanI } from "./plan.interface";

class Audi implements InsuranceI {
  private static instance: Audi;
  readonly assetName: string = "Audi";
  private constructor(readonly price: number, readonly percentage: number) {}
  public static getInstance(): Audi {
    if (!Audi.instance) {
      Audi.instance = new Audi(250, 0.3);
    }
    return Audi.instance;
  }
  public getYearlyPrice(plan: PlanI, value: number): number {
    return plan?.getYearlyPrice(this, value);
  }
}

class BMW implements InsuranceI {
  private static instance: BMW;
  readonly assetName: string = "BMW";
  private constructor(readonly price: number, readonly percentage: number) {}
  public static getInstance(): BMW {
    if (!BMW.instance) {
      BMW.instance = new BMW(150, 0.4);
    }
    return BMW.instance;
  }
  public getYearlyPrice(plan: PlanI, value: number): number {
    return plan?.getYearlyPrice(this, value);
  }
}

class Porsche implements InsuranceI {
  private static instance: Porsche;
  readonly assetName: string = "Porsche";
  private constructor(readonly price: number, readonly percentage: number) {}
  public static getInstance(): Porsche {
    if (!Porsche.instance) {
      Porsche.instance = new Porsche(500, 0.7);
    }
    return Porsche.instance;
  }
  public getYearlyPrice(plan: PlanI, value: number): number {
    return plan?.getYearlyPrice(this, value);
  }
}

export const CARS: InsuranceI[] = [
  Audi.getInstance(),
  BMW.getInstance(),
  Porsche.getInstance()
];
