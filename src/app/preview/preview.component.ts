import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private gameService: GameService) { }

  getPiece() {
    return this.gameService.nextPiece.draw();
  }

  ngOnInit() {
  }

}
