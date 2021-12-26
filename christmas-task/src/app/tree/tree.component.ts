import { Component } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
  isPlay = false;

  audio = new Audio('../../assets/tree/audio/audio.mp3');

  public urlBg = '../../../assets/tree/bg/bg1.jpg';

  public tree = '1';

  snowToggle = false;

  // constructor() { }

  playAudio(audio: { src: string; play: () => void; pause: () => void }): void {
    // audio.src = '../../assets/tree/audio/audio.mp3';
    if (!this.isPlay) {
      audio.play();
      this.isPlay = true;
    } else {
      audio.pause();
      this.isPlay = false;
    }
  }

  changeBg(event: any): void {
    this.urlBg = '../../../assets/tree/bg/' + event.target.alt + '.jpg';
  }

  chooseTree(event: any): void {
    this.tree = event.target.alt;
  }

  // snow() {

  // }
}
