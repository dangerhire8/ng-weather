import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { forecastsListResolver } from './features/forecasts-list/forecasts-list.resolver';
import { MainPageComponent } from './features/main-page/main-page.component';
import { ForecastsListComponent } from './features/forecasts-list/forecasts-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'forecast/:zipcode',
    component: ForecastsListComponent,
    resolve: {
      forecast: forecastsListResolver,
    },
  },
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes,
  {}
);
