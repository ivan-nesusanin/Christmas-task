import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/modules/interfaces/card-interface';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  public toys: Card[] = data.slice(0, 20);

  isPlay = false;

  audio = new Audio('../../assets/tree/audio/audio.mp3');

  public urlBg: string | null = '../../../assets/tree/bg/bg1.jpg';

  public tree: string | null = '1';

  public snowToggle = false;

  public lightsToggle = false;

  // constructor() {}

  ngOnInit(): void {
    this.urlBg = localStorage.getItem('bg');
    this.tree = localStorage.getItem('tree');
    // this.isPlay = Boolean(localStorage.getItem('music'));
    this.snowToggle = Boolean(localStorage.getItem('snow'));
    this.lightsToggle = Boolean(localStorage.getItem('lights'));
  }

  playAudio(audio: { src: string; play: () => void; pause: () => void }): void {
    // audio.src = '../../assets/tree/audio/audio.mp3';
    if (!this.isPlay) {
      audio.play();
      this.isPlay = true;
    } else {
      audio.pause();
      this.isPlay = false;
      // localStorage.setItem('music', this.isPlay.toString());
    }
  }

  changeBg(event: any): void {
    this.urlBg = '../../../assets/tree/bg/' + event.target.alt + '.jpg';
    localStorage.setItem('bg', this.urlBg);
  }

  chooseTree(event: any): void {
    this.tree = event.target.alt;
    localStorage.setItem('tree', event.target.alt);
  }

  snow(): void {
    this.snowToggle = !this.snowToggle;
    localStorage.setItem('snow', this.snowToggle.toString());
  }

  lights(): void {
    this.lightsToggle = !this.lightsToggle;
    localStorage.setItem('lights', this.lightsToggle.toString());
  }

  resetSettings(event: Event): void {
    if (event) {
      localStorage.clear();
    }
  }
}
