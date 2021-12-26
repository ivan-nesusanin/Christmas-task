import { Component, Input } from '@angular/core';
import { Card } from 'src/app/modules/interfaces/card-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  cards!: Card;

  // constructor() {}
}
