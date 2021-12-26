import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-garland',
  templateUrl: './garland.component.html',
  styleUrls: ['./garland.component.scss'],
})
export class GarlandComponent {
  // constructor() {}

  @Output() eOnGarland = new EventEmitter<Event>();

  onGarland(event: Event) {
    this.eOnGarland.emit(event);
  }
}
