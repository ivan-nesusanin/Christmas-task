import { Component, OnInit } from '@angular/core';
import { data } from '../../../assets/data';

export interface Card {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

@Component({
  selector: 'app-toy',
  templateUrl: './toy.component.html',
  styleUrls: ['./toy.component.scss'],
})
export class ToyComponent implements OnInit {
  constructor() {}

  cards: Card[] = data;

  ngOnInit(): void {}
}
