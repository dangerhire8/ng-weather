import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckDuplicates } from './zipcode-unique.validator';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class ZipcodeEntryComponent {
  @Output() add = new EventEmitter<string>();
  //we can also add async validator to check if the zipcode is valid
  input = new FormControl('', [Validators.required, CheckDuplicates()]);

  addLocation() {
    if (this.input.valid) {
      this.add.emit(this.input.value);
      this.input.reset();
    } else {
      this.input.markAsTouched();
    }
  }
}
