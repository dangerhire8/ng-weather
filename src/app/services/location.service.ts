import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { skip } from 'rxjs/operators';

export const LOCATIONS: string = 'locations';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private _locations$ = new BehaviorSubject(this.loadLocations());
  locations$ = this._locations$.asObservable();

  constructor() {
    this._locations$.pipe(skip(1)).subscribe((locations) => {
      localStorage.setItem(LOCATIONS, JSON.stringify(locations));
    });
  }

  addLocation(zipcode: string) {
    this._locations$.next([...this._locations$.getValue(), zipcode]);
  }

  removeLocation(zipcode: string) {
    const updatedLocations = this._locations$
      .getValue()
      .filter((loc) => loc !== zipcode);

    this._locations$.next(updatedLocations);
  }

  hasLocation(zipcode: string): boolean {
    return this._locations$.getValue().includes(zipcode);
  }

  private loadLocations(): string[] {
    const locString = localStorage.getItem(LOCATIONS);
    return locString ? (JSON.parse(locString) as string[]) : [];
  }
}
