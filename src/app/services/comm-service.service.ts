import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";

import { SharedComm } from "./comm-interface.interface";

//This is a simple service that provides communication between components.
@Injectable({ providedIn: "root" })
export class CommService {
  private sharedData: BehaviorSubject<SharedComm>;

  constructor() {
    this.sharedData = new BehaviorSubject({
      fromSender: "",
      sharedData: [{}]
    });
  }

  public get shared(): Observable<SharedComm> {
    return this.sharedData.asObservable();
  }

  public set share(share: SharedComm) {
    this.sharedData.next(share);
  }
}
