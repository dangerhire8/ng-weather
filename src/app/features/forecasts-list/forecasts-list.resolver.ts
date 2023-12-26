import { inject } from '@angular/core';
import type { ResolveFn } from '@angular/router';
import { WeatherService } from 'app/services/weather.service';
import { Forecast } from '../../types/forecast.type';

export const forecastsListResolver: ResolveFn<Forecast> = (route, state) => {
  return inject(WeatherService).getForecast(route.params['zipcode']);
};
