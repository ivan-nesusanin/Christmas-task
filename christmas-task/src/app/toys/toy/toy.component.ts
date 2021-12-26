import { Component, Input } from '@angular/core';
import { Card } from 'src/app/modules/interfaces/card-interface';

@Component({
  selector: 'app-toy',
  templateUrl: './toy.component.html',
  styleUrls: ['./toy.component.scss'],
})
export class ToyComponent {
  @Input() cards: Card[] = [];

  // constructor() {}
}
