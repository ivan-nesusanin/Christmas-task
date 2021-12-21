import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  // form: FormGroup;

  ngOnInit(): void {
  //   this.form = new FormGroup({});
  }

  @Output() eFilterWhite = new EventEmitter<boolean>();

  @Output() eFilterBlue = new EventEmitter<boolean>();

  @Output() eFilterRed = new EventEmitter<boolean>();

  @Output() eFilterGreen = new EventEmitter<boolean>();

  @Output() eFilterYellow = new EventEmitter<boolean>();

  @Output() eFilterSort = new EventEmitter<boolean>();

  @Output() eFilterReset = new EventEmitter<boolean>();

  // constructor() {}

  clickedWhite = false;

  clickedBlue = false;

  clickedRed = false;

  clickedGreen = false;

  clickedYellow = false;

  filterWhite(clickedWhite: boolean): void {
    this.eFilterWhite.emit(clickedWhite);
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

    this.eFilterSort.emit(changeSort);
  }

  resetFilters(reset: boolean) {
    this.eFilterReset.emit(reset);
  }
}
