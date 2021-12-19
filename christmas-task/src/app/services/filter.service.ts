import { Injectable } from '@angular/core';
import { data } from 'src/assets/data';

@Injectable()
export class FilterService {
  data = data.filter((item) => item.color === 'красный');
}
console.log(data)
