/*
Contains the validators.
*/
import {
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
  Validators
} from "@angular/forms";
import { validators } from "src/environments/environment";

export class QValidators {
  /*
  Return riskRevealed: true if age <25 and the car is "Porsche".
  */
  static riskRevealedValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const age = control.get("age");
    const asset = control.get("asset");
    return age.value < 25 && asset.value === "C2203"
      ? { riskRevealed: true }
      : null;
  };

  /*
  Custom validator for minimum age with default value set to validators.MIN_AGE.
  */
  static MIN_AGE_REQUIRED(minAge = validators.MIN_AGE): ValidatorFn[] {
    return [
      Validators.min(minAge),
      Validators.required,
      Validators.pattern(/[0-9]/i)
    ];
  }

  /*
  Custom validator for minimum asset value with default value set to validators.MIN_VALUE.
  */
  static MIN_VALUE_REQUIRED(minVal = validators.MIN_VALUE): ValidatorFn[] {
    return [
      Validators.min(minVal),
      Validators.required,
      Validators.pattern(/[0-9]/i)
    ];
  }
}
