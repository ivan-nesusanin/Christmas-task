import { Component, EventEmitter, Output } from '@angular/core';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @Output() eFilterWhite = new EventEmitter<boolean>();

  @Output() eFilterBlue = new EventEmitter<boolean>();

  @Output() eFilterRed = new EventEmitter<boolean>();

  @Output() eFilterGreen = new EventEmitter<boolean>();

  @Output() eFilterYellow = new EventEmitter<boolean>();

  @Output() eFilterSort = new EventEmitter<boolean>();

  // constructor() {}

  clickedWhite = false;

  clickedBlue = false;

  clickedRed = false;

  clickedGreen = false;

  clickedYellow = false;

  filterWhite(clickWhite: boolean): void {
    this.eFilterWhite.emit(clickWhite);
  }

  filterBlue(clickBlue: boolean): void {
    this.eFilterBlue.emit(clickBlue);
  }

  filterRed(clickRed: boolean): void {
    this.eFilterRed.emit(clickRed);
  }

  filterGreen(clickGreen: boolean): void {
    this.eFilterGreen.emit(clickGreen);
  }

  filterYellow(clickYellow: boolean): void {
    this.eFilterYellow.emit(clickYellow);
  }

  sort(changeSort: boolean): void {
    const x = data;
    console.log(x)
    this.eFilterSort.emit(changeSort);
  }
}
