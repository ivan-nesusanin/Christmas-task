import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../toy.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  cards!: Card;

  constructor() {}

  ngOnInit(): void {}
}
