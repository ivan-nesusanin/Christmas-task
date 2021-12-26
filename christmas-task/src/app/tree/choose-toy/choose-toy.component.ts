import { Component, Input } from '@angular/core';
// import { data } from 'src/assets/data';
import { Card } from 'src/app/modules/interfaces/card-interface';

@Component({
  selector: 'app-choose-toy',
  templateUrl: './choose-toy.component.html',
  styleUrls: ['./choose-toy.component.scss'],
})
export class ChooseToyComponent {
  @Input()
  toy!: Card[];
  // constructor() {}
}
