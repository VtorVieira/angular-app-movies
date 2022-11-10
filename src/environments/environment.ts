// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApiUrl: "https://api.themoviedb.org/3/",
  apiKey: "32b2538fae9d6a2e14d1539dde85893f",
  imgPath: "https://image.tmdb.org/t/p/w220_and_h330_face/",
  detailImgPath: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/",
  recommendationImgPath: 'https://image.tmdb.org/t/p/w250_and_h141_face/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
