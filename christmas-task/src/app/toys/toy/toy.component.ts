import { Component } from '@angular/core';
import { Card } from 'src/app/modules/interfaces/card-interface';
import { data } from '../../../assets/data';

@Component({
  selector: 'app-toy',
  templateUrl: './toy.component.html',
  styleUrls: ['./toy.component.scss'],
})

export class ToyComponent {
  cards: Card[] = data;

  constructor() {}
}