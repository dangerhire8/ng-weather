import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Forecast } from '../../types/forecast.type';
import { WeatherIconPipe } from 'app/pipes/weather-icon.pipe';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, WeatherIconPipe, RouterModule],
})
export class ForecastsListComponent {
  forecast: Forecast;

  constructor(route: ActivatedRoute) {
    this.forecast = route.snapshot.data.forecast;
  }
}
