import { Component, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/app/modules/interfaces/card-interface';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @Output() eFilter: EventEmitter<Card[]> = new EventEmitter<Card[]>();

  constructor() {}

  filterWhite(): void {
    const filterCards = data.filter((item) => item.color === 'белый');
    this.eFilter.emit(filterCards);
    // console.log(filterCards);
  }

  filterRed(): void {
    console.log(data.filter((item) => item.color === 'красный'));
  }
}
