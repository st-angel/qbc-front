import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { PlanI } from "./business/plan.interface";

@Injectable({ providedIn: "root" })
export class QuoteService {
  getQuote(data: any): Observable<PlanI[]> {
    return of(null).pipe(delay(1000));
  }
}
