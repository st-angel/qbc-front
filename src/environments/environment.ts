// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

const BACK_END = "https://k1drh.sse.codesandbox.io";

export const API = {
  AUTH: `${BACK_END}/login`,
  ASSETS_CARS: `${BACK_END}/assets/cars`,
  QUOTEREQUESTS: `${BACK_END}/quoterequests`,
  PLANS: `${BACK_END}/plans`
};

export const validators = {
  MIN_AGE: 18,
  MIN_VALUE: 5000
};

export const planSettings = {
  MONTHLY_MULTIPLIER: 1 / 10.0,
  YEARLY_MULTIPLIER: 12.0
};

export const labels = {
  text: {
    maxTravel: "Maximum travel duration",
    medicalReimbursement: "Medical expenses reimbursement",
    personalAssistance: "Personal assistance abroad",
    travelAssistance: "Travel assistance abroad",
    coverage: "Coverage duration:",
    lblDefault: "Contact Service Desk*"
  },

  textAdd: {
    travelAssistance: "per insured per travel"
  },

  prep: {
    maxTravel: "of",
    coverage: " ",
    lblDefault: "up to"
  },

  unit: {
    coverage: "year",
    maxTravel: "days",
    lblDefault: "€"
  }
};
