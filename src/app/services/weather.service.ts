import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, forkJoin, of } from 'rxjs';
import {
  catchError,
  defaultIfEmpty,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { ConditionsAndZip } from '../types/conditions-and-zip.type';
import { CurrentConditions } from '../types/current-conditions.type';
import { Forecast } from '../types/forecast.type';
import { LocationService } from './location.service';
import { StorageService } from './storage.service';
import { OPENWEATHER_API_URL } from 'app/api-config';

const WEATHER_KEY = 'weather';
const FORECAST_KEY = 'forecast';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private http = inject(HttpClient);
  private locationService = inject(LocationService);
  private storageService = inject(StorageService);

  currentConditions: Signal<ConditionsAndZip[]> = toSignal(
    this.locationService.locations$.pipe(
      switchMap((locations) =>
        forkJoin(locations.map((loc) => this.getCurrentConditions(loc))).pipe(
          defaultIfEmpty([])
        )
      )
    )
  );

  private getCurrentConditions(zipcode: string): Observable<ConditionsAndZip> {
    return this.requestData<CurrentConditions>(
      `${OPENWEATHER_API_URL}/weather?zip=${zipcode},us&units=imperial`,
      `${WEATHER_KEY}-${zipcode}`
    ).pipe(
      map((data) => ({ zip: zipcode, data })),
      catchError((error) => {
        return of({
          zip: zipcode,
          error:
            error.message ??
            `Something went wrong durning request for that zipcode - ${zipcode}`,
        });
      })
    );
  }

  getForecast(zipcode: string): Observable<Forecast> {
    return this.requestData<Forecast>(
      `${OPENWEATHER_API_URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5`,
      `${FORECAST_KEY}-${zipcode}`
    );
  }

  private requestData<T>(url: string, keyInStorage?: string): Observable<T> {
    if (keyInStorage) {
      const cached = this.storageService.getItem<T>(keyInStorage);

      return cached
        ? of(cached)
        : this.http
            .get<T>(url)
            .pipe(
              tap((data) => this.storageService.setItem(keyInStorage, data))
            );
    }
    //not caching the storage if there is no key
    return this.http.get<T>(url);
  }
}
