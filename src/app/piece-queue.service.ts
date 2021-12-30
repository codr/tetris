import { Injectable } from '@angular/core';
import { PieceFactory, Piece } from './pieces';

@Injectable({
  providedIn: 'root'
})
export class PieceQueueService {

  private nextPiece = PieceFactory.newPiece();

  constructor() { }

  peek(): Piece {
    return this.nextPiece;
  }

  pop(): Piece {
    const next = this.nextPiece;
    this.nextPiece = PieceFactory.newPiece();
    return next;
  }
}
