import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APPID, OPENWEATHER_API_URL } from 'app/api-config';
import { Observable } from 'rxjs';

@Injectable()
export class OpenweatherInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes(OPENWEATHER_API_URL)) {
      const newReq = req.clone({
        params: (req.params ? req.params : new HttpParams()).set(
          'appid',
          APPID
        ),
      });

      return next.handle(newReq);
    }

    return next.handle(req);
  }
}
