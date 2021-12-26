import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choose-tree',
  templateUrl: './choose-tree.component.html',
  styleUrls: ['./choose-tree.component.scss'],
})
export class ChooseTreeComponent {
  // constructor() { }

  @Output() eChooseTree = new EventEmitter<Event>();

  chooseTree(event: Event) {
    this.eChooseTree.emit(event);
  }
}
