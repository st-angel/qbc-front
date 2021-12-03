/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthInterceptor } from "./auth-interceptor";

export const ALL_HTTP_INTERCEPTORS_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
