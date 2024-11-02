// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    /*production: true,
    url: 'https://api.app.nexassur.com/public',
    PATH_URL: 'https://api.app.nexassur.com/public/storage/filaka/', 
    url_image: '/assets/img/', */
   production: false,
    url: 'http://localhost:8000',
    PATH_URL: 'http://localhost:8000/storage/',
    url_image: '/assets/img/', 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
