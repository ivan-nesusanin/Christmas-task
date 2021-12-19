import { Component } from '@angular/core';

import { Card } from '../modules/interfaces/card-interface';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.scss'],
})
export class ToysComponent {
  constructor() {}

  updateCards(filterCards: Card[]) {
    console.log(filterCards);
  }
}
