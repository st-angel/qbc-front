import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { NgxSpinnerService } from "ngx-spinner";

import { CarI } from "../business/insurance.interface";
import { QValidators } from "../business/qvalidators";

import { CommService } from "../services/comm-service.service";

import { API } from "../../environments/environment";

interface QuoteReqI {
  assetId: string;
  assetValue: number;
  clientAge: number;
}

@Component({
  selector: "quick-quote",
  inputs: ["assetsAPI", "assetLabel"],
  templateUrl: "./quickquote.component.html",
  styleUrls: ["./quickquote.component.css"]
})
export class QuickquoteComponent implements OnInit {
  static readonly SHARED_COMM_ID: string = "quickquote";

  formDataQ: FormGroup;
  readonly assetLabel: string = "Car";
  assetsAPI: CarI[];

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient,
    private readonly sharedCommService: CommService,
    private readonly spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();
    //Get the list of available assets
    const req = this.httpClient.get<CarI[]>(API.ASSETS_CARS);
    req.subscribe((data: CarI[]) => {
      this.spinnerService.hide();
      this.assetsAPI = data;
    });

    //Initialize the form model and add validators
    this.formDataQ = new FormGroup(
      {
        age: new FormControl(null, QValidators.MIN_AGE_REQUIRED()),
        asset: new FormControl(),
        price: new FormControl(null, QValidators.MIN_VALUE_REQUIRED())
      },
      { validators: QValidators.riskRevealedValidator }
    );
  }

  callQuoteRequestAPI(quoteReq: QuoteReqI) {
    const req = this.httpClient.post<QuoteReqI>(API.QUOTEREQUESTS, quoteReq);
    return req;
  }

  getQuoteAPI(data: any) {
    if (
      this.formDataQ.errors ||
      this.formDataQ.get("age").errors ||
      this.formDataQ.get("price").errors
    ) {
      return -1;
    }

    const quoterequest: QuoteReqI = {
      clientAge: Number(data.age),
      assetId: data.asset,
      assetValue: Number(data.price)
    };

    //Calls the API to obtain quotes
    this.callQuoteRequestAPI(quoterequest).subscribe((data) => {
      //Publishes the response to the shared communication service
      this.sharedCommService.share = {
        fromSender: QuickquoteComponent.SHARED_COMM_ID,
        sharedData: (data as any).quotes
      };

      this.router.navigate(["/plan"]);
    });

    return 0;
  }

  get age() {
    return this.formDataQ.get("age");
  }

  get price() {
    return this.formDataQ.get("price");
  }
}
