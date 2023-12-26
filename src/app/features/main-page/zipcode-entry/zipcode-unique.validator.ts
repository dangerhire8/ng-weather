import { inject } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { LocationService } from 'app/services/location.service';

export function CheckDuplicates(): ValidatorFn {
  const locationsService = inject(LocationService);

  return (control: AbstractControl): ValidationErrors | null => {
    return locationsService.hasLocation(control.value)
      ? { duplicate: true }
      : null;
  };
}
