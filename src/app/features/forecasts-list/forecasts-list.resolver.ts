import { inject } from '@angular/core';
import type { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Forecast } from '../../types/forecast.type';
import { WeatherService } from 'app/services/weather.service';

export const forecastsListResolver: ResolveFn<Forecast> = (
  route: ActivatedRouteSnapshot,
  state
) => {
  return inject(WeatherService).getForecast(route.params['zipcode']);
};
