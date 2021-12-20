import { Injectable } from '@angular/core';
import { data } from 'src/assets/data';

@Injectable()
export class FilterService {

  filterRed(): void {
    data.filter((item) => item.color === 'красный');
  }
}
