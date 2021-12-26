import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent {
  // constructor() {}

  @Output() eChangeBg = new EventEmitter<Event>();

  changeBg(event: Event) {
    this.eChangeBg.emit(event);
  }
}
