import { Injectable } from '@angular/core';

import { Board, NUMBER_COLS } from './board';
import { Piece, PieceFactory } from './pieces';
import { Square } from './square';
import { Util } from './util';

const START_COL = ((NUMBER_COLS / 2) - 1) * -1;
const TICK = 1000;

@Injectable()
export class GameService {
  private board = Board.generateBoard();
  private activePiece = PieceFactory.newPiece();
  nextPiece = PieceFactory.newPiece();
  private offsetColumn = START_COL;
  private offsetRow = 0;
  private timer: ReturnType<typeof setTimeout>;

  constructor() {
    this.setTicker();
  }

  private setTicker() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.moveDown(), TICK);
  }

  getStage(): Array<Array<Square>> {
    let piece = this.activePiece.draw();
    let stage = this.board.map((row, y) =>
      row.map((square, x) =>
        piece[y + this.offsetRow] &&
        piece[y + this.offsetRow][x + this.offsetColumn] &&
        piece[y + this.offsetRow][x + this.offsetColumn].isOccupied ?
            piece[y + this.offsetRow][x + this.offsetColumn] :
            square
      )
    )
    return stage;
  }

  private countSquares(): number {
    return Util.flatten(this.getStage()).reduce((count, square) =>
      square.isOccupied ? ++count : count
    , 0);
  }

  moveRight() {
    const pre = this.countSquares();
    this.offsetColumn--;
    const post = this.countSquares();
    if (pre !== post) {
      this.offsetColumn++;
    }
  }

  moveLeft() {
    const pre = this.countSquares();
    this.offsetColumn++;
    const post = this.countSquares();
    if (pre !== post) {
      this.offsetColumn--;
    }
  }

  moveDown() {
    const pre = this.countSquares();
    this.offsetRow--;
    const post = this.countSquares();
    if (pre !== post) {
      this.offsetRow++;
      this.placePiece();
      this.addNextPiece();
    }
    this.setTicker();
  }

  rotate() {
    const pre = this.countSquares();
    this.activePiece.rotate();
    let post = this.countSquares();
    if (pre === post) {
      return;
    }
    // Can't make move.
    this.activePiece.rotate();
    this.activePiece.rotate();
    this.activePiece.rotate();
  }

  placePiece() {
    this.board = this.getStage();
  }

  addNextPiece() {
    this.activePiece = this.nextPiece;
    this.nextPiece = PieceFactory.newPiece();
    this.offsetRow = 0;
    this.offsetColumn = START_COL;
  }

}
