import { Component, OnInit, HostListener } from '@angular/core';

import { GameService } from '../game.service';
import { Square } from '../square';

@Component({
  selector: 'stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  rows: Array<Array<Square>>;

  constructor(private gameService: GameService) {
    this.rows = gameService.getStage();
  }

  getStage() {
    return this.gameService.getStage();
  }

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    switch (event.key) {
      case 'a':
      case 'A':
      case 'ArrowLeft':
        this.gameService.moveLeft();
        break;
      case 'd':
      case 'D':
      case 'ArrowRight':
        this.gameService.moveRight();
        break;
      case 'w':
      case 'W':
      case 'ArrowUp':
        this.gameService.rotate();
        break;
      case 's':
      case 'S':
      case 'ArrowDown':
        this.gameService.moveDown();
        break;
    }
  }

  ngOnInit() {
  }

}
