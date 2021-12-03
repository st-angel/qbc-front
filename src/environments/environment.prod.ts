export const environment = {
  production: true
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
