import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  // constructor() { }

  changeBg(event?: Event): void {
    console.log(event?.target);
  }
}
