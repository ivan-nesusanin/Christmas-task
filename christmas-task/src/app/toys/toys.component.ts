import { Component } from '@angular/core';
import { data } from 'src/assets/data';
import { Card } from '../modules/interfaces/card-interface';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.scss'],
})
export class ToysComponent {
  public filterCards: Card[] = data;

  sort(changeSort: boolean): void {
    if (changeSort) {
      const arr = data.slice(0);
      this.filterCards = arr.sort((a, b) => {
        if (b.name < a.name) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }

  filterWhite(clickedWhite: boolean): void {
    if (this.filterCards.length >= 60) this.filterCards = [];
    if (clickedWhite) {
      const white = data.filter((item) => item.color === 'белый');
      white.forEach((item) => this.filterCards.push(item));
    }
  }

  filterBlue(clickBlue: boolean): void {
    if (this.filterCards.length >= 60) this.filterCards = [];
    if (clickBlue) {
      const blue = data.filter((item) => item.color === 'синий');
      blue.forEach((item) => this.filterCards.push(item));
    }
  }

  filterRed(clickRed: boolean): void {
    if (this.filterCards.length >= 60) this.filterCards = [];
    if (clickRed) {
      const red = data.filter((item) => item.color === 'красный');
      red.forEach((item) => this.filterCards.push(item));
    }
  }

  filterGreen(clickGreen: boolean): void {
    if (this.filterCards.length >= 60) this.filterCards = [];
    if (clickGreen) {
      const green = data.filter((item) => item.color === 'зелёный');
      green.forEach((item) => this.filterCards.push(item));
    }
  }

  filterYellow(clickYellow: boolean): void {
    if (this.filterCards.length >= 60) this.filterCards = [];
    if (clickYellow) {
      const yellow = data.filter((item) => item.color === 'желтый');
      yellow.forEach((item) => this.filterCards.push(item));
    }
  }

  resetFilters(reset: boolean) {
    if (reset) this.filterCards = data;
  }
}
