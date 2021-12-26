import { Component, Input } from '@angular/core';
import { Card } from 'src/app/modules/interfaces/card-interface';

@Component({
  selector: 'app-favorite-toy',
  templateUrl: './favorite-toy.component.html',
  styleUrls: ['./favorite-toy.component.scss'],
})
export class FavoriteToyComponent {
  @Input()
  toy!: Card;
  // constructor() {}
}
