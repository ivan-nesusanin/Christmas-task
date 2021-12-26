import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss'],
})
export class GameAreaComponent {
  // constructor() {}

  @Input() urlBg!: string;

  @Input() tree!: string;

  @Input() toggle!: boolean;
}
