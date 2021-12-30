import { Component, OnInit } from '@angular/core';
import {PieceQueueService} from 'app/piece-queue.service';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(
    private readonly pieceQueue: PieceQueueService,
    ) { }

  getPiece() {
    return this.pieceQueue.peek().draw();
  }

  ngOnInit() {
  }

}
