import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      select: new FormControl('value0'),
    });
  }

  @Output() eFilterWhite = new EventEmitter<boolean>();

  @Output() eFilterBlue = new EventEmitter<boolean>();

  @Output() eFilterRed = new EventEmitter<boolean>();

  @Output() eFilterGreen = new EventEmitter<boolean>();

  @Output() eFilterYellow = new EventEmitter<boolean>();

  @Output() eFilterSort = new EventEmitter<boolean>();

  @Output() eFilterReset = new EventEmitter<boolean>();

  @Output() eFilterCheckBig = new EventEmitter<boolean>();

  @Output() eFilterCheckMiddle = new EventEmitter<boolean>();

  @Output() eFilterCheckSmall = new EventEmitter<boolean>();

  @Output() eFilterBell = new EventEmitter<boolean>();

  @Output() eFilterBall = new EventEmitter<boolean>();

  @Output() eFilterPine = new EventEmitter<boolean>();

  @Output() eFilterSnowflake = new EventEmitter<boolean>();

  @Output() eFilterBird = new EventEmitter<boolean>();

  // constructor() {}

  clickedWhite = false;

  clickedBlue = false;

  clickedRed = false;

  clickedGreen = false;

  clickedYellow = false;

  // сортировка по форме
  checkBell(bell: boolean) {
    this.eFilterBell.emit(bell);
  }

  checkBall(ball: boolean) {
    this.eFilterBall.emit(ball);
  }

  checkPine(pine: boolean) {
    this.eFilterPine.emit(pine);
  }

  checkSnowflake(snowflake: boolean) {
    this.eFilterSnowflake.emit(snowflake);
  }

  checkBird(bird: boolean) {
    this.eFilterBird.emit(bird);
  }

  // сортировка по цвету
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

  // сортировка по алфавиту
  sort(changeSort: boolean): void {
    this.eFilterSort.emit(changeSort);
  }

  // сброс фильтров
  resetFilters(reset: boolean) {
    this.eFilterReset.emit(reset);
  }

  // сортировка по размеру
  checkBig(big: boolean): void {
    this.eFilterCheckBig.emit(big);
  }

  checkMiddle(middle: boolean): void {
    this.eFilterCheckMiddle.emit(middle);
  }

  checkSmall(small: boolean): void {
    this.eFilterCheckSmall.emit(small);
  }
}
