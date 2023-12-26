import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  inject,
} from '@angular/core';
import { LocationService } from 'app/services/location.service';
import { WeatherService } from 'app/services/weather.service';
import { TabsModule } from 'app/shared/tabs/tabs.module';
import { ConditionsAndZip } from 'app/types/conditions-and-zip.type';
import { CurrentConditionsComponent } from './current-condition/current-condition.component';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';

@Component({
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    CurrentConditionsComponent,
    ZipcodeEntryComponent,
    TabsModule,
  ],
})
export class MainPageComponent {
  private locationService = inject(LocationService);
  private weatherService = inject(WeatherService);

  protected currentConditionsByZip: Signal<ConditionsAndZip[]> =
    this.weatherService.currentConditions;

  addLocation(zipcode: string) {
    this.locationService.addLocation(zipcode);
  }

  removeLocation(zipcode: string) {
    this.locationService.removeLocation(zipcode);
  }
}
