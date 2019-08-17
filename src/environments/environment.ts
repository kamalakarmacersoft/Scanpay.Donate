// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "",
  loginUrl: "https://zez3yy4jji.execute-api.us-east-1.amazonaws.com/DEV/login",
  businessUrl: "https://zez3yy4jji.execute-api.us-east-1.amazonaws.com/DEV/location",
  salesBreakdownUrl: "https://j0uwhdrtsf.execute-api.us-east-1.amazonaws.com/DEV/overview/organization",
  customersUrl: "https://fyusfi3gtj.execute-api.us-east-1.amazonaws.com/DEV/customers",
  profileUrl: "https://zez3yy4jji.execute-api.us-east-1.amazonaws.com/DEV/profile",
  merchantRegistration: "https://zez3yy4jji.execute-api.us-east-1.amazonaws.com/DEV",
  createOrg: "https://fyusfi3gtj.execute-api.us-east-1.amazonaws.com/DEV",
  donate: "https://7vncpa6jk8.execute-api.us-east-1.amazonaws.com/Prod/donate",
  offering: "https://7vncpa6jk8.execute-api.us-east-1.amazonaws.com/Prod/offering/",
  relieffund: "https://7vncpa6jk8.execute-api.us-east-1.amazonaws.com/Prod/relieffund/",
  hello: "https://7vncpa6jk8.execute-api.us-east-1.amazonaws.com/Prod/hello/",

  donationSuccess: "https://scan2pay.io/donate/donatestatus.html?status=0",
  donationFailure: "https://scan2pay.io/donate/donatestatus.html?status=1",
  donationChangeMyMind: "https://scan2pay.io/donate/donatestatus.html?status=-1"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
