import { Injectable } from '@angular/core';

const EXPIRATION_TIME = 2 * 60 * 60 * 1000; // 2 hours

type StorageItem<T = unknown> = {
  value: T;
  timestamp: number;
};

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setItem(key: string, value: unknown) {
    const storageItem: StorageItem = {
      value,
      timestamp: Date.now(),
    };

    try {
      localStorage.setItem(key, JSON.stringify(storageItem));
    } catch (error) {
      console.error(`Error setting item for key ${key}:`, error);
    }
  }

  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (!item) {
      return null;
    }
    try {
      const { value, timestamp } = JSON.parse(item);

      if (Date.now() - timestamp > EXPIRATION_TIME) {
        localStorage.removeItem(key);
        return null;
      }
      return value;
    } catch (error) {
      console.error(`Error parsing item for key ${key}:`, error);
      return null;
    }
  }
}
