// import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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

  @Input() lightsToggle!: boolean;

  // toys: [] = [];

  // drop(event: CdkDragDrop<[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
  //   }
  //   console.log(event);
  // }
}
