import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ConditionsAndZip } from '../../../types/conditions-and-zip.type';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherIconPipe } from 'app/pipes/weather-icon.pipe';

@Component({
  selector: 'app-current-condition',
  templateUrl: './current-condition.component.html',
  styleUrls: ['./current-condition.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule, WeatherIconPipe],
})
export class CurrentConditionsComponent {
  @Input() condition: ConditionsAndZip;
}
