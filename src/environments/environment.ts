// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrlCity:"http://dataservice.accuweather.com/locations/v1/cities/search",
  baseUrlWeather:"http://dataservice.accuweather.com/currentconditions/v1",
  baseUrlHourlyWeather:"http://dataservice.accuweather.com/forecasts/v1/hourly/12hour",
  keyName:"apikey",
  keyValue:"lmrK0x6fDHkahn107pI4atVFfmTArVMz"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
import { HttpParams } from '@angular/common/http';
