import { Injectable } from '@angular/core';

import { Piece } from './pieces/piece';
import { PieceI } from './pieces/piece-i';
import { Square } from './square';
import { Util } from './util';

export const NUMBER_ROWS = 24;
export const NUMBER_COLS = 12;
const START_COL = ((NUMBER_COLS / 2) - 1) * -1;
const TICK = 1000;

@Injectable()
export class GameService {
  board: Array<Array<Square>>
  activePiece: Piece;
  nextPiece: Piece;
  offsetColumn = START_COL;
  offsetRow = 0;
  timer: number;

  constructor() {
    this.board = GameService.generateBoard();
    // this.activePiece = Piece.newPiece();
    this.activePiece = new PieceI();
    // this.nextPiece = Piece.newPiece();
    this.nextPiece = Piece.getPiece();
    this.setTicker();
  }

  static generateBoard() {
    const board = Array(NUMBER_ROWS).fill(null);
    board.forEach(GameService.generateRow);
    return board;
  }

  static generateRow(row, index, rows) {
    rows[index] = Array(NUMBER_COLS).fill(null);
    rows[index].forEach(GameService.generateSquare);
  }

  static generateSquare(square, index, row) {
    row[index] = new Square();
  }

  setTicker() {
    clearTimeout(this.timer);
    this.timer = setTimeout(this.moveDown.bind(this), TICK);
  }

  getStage(): Array<Array<Square>> {
    let piece = this.activePiece.draw();
    let stage = this.board.map((row, y) =>
      row.map((square, x) =>
        piece[y + this.offsetRow] &&
        piece[y + this.offsetRow][x + this.offsetColumn] &&
        piece[y + this.offsetRow][x + this.offsetColumn].isOccupied() ?
            piece[y + this.offsetRow][x + this.offsetColumn] :
            square
      )
    )
    return stage;
  }

  countSquares(): number {
    return Util.flatten(this.getStage()).reduce((acc, val) =>
      acc + (val.isOccupied() ? 1 : 0)
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
    const originalOffset = this.offsetColumn;
    this.offsetColumn++;
    post = this.countSquares();
    if (pre === post) {
      return;
    }
    this.offsetColumn = originalOffset - 1;
    post = this.countSquares();
    if (pre === post) {
      return;
    }
    this.offsetColumn = originalOffset + 2;
    post = this.countSquares();
    if (pre === post) {
      return;
    }
    this.offsetColumn = originalOffset - 2;
    post = this.countSquares();
    if (pre === post) {
      return;
    }
    // Can't make move.
    this.offsetColumn = originalOffset;
    this.activePiece.rotate();
    this.activePiece.rotate();
    this.activePiece.rotate();
  }

  placePiece() {
    this.board = this.getStage();
  }

  addNextPiece() {
    this.activePiece = this.nextPiece;
    this.nextPiece = new PieceI();
    this.offsetRow = 0;
    this.offsetColumn = START_COL;
  }

}
