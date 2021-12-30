import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Board, NUMBER_COLS } from './board';
import { PieceFactory } from './pieces';
import { Square } from './square';
import { Util } from './util';

import {GameOverDialogComponent} from './game-over-dialog/game-over-dialog.component';

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

  constructor(
    private readonly dialog: MatDialog,
  ) {
    this.startTicker();
  }

  private startTicker() {
    clearTimeout(this.timer);
    if (this.activePieceOverlaps()) {
      this.showGameOver();
      return;
    }
    this.timer = setTimeout(() => this.tick(), TICK);
  }

  private tick() {
    this.moveDown();
  }

  private showGameOver() {
    this.dialog.open(GameOverDialogComponent);
  }

  getStage(): Square[][] {
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
    return Util.count(this.getStage(), s => s.isOccupied);
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
    this.startTicker();
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

  private placePiece() {
    this.board = this.getStage();
  }

  private addNextPiece() {
    this.activePiece = this.nextPiece;
    this.nextPiece = PieceFactory.newPiece();
    this.offsetRow = 0;
    this.offsetColumn = START_COL;
  }

  private activePieceOverlaps(): boolean {
    const occupiedOnBoard = Util.count(this.board, s => s.isOccupied);
    const expected = occupiedOnBoard + this.activePiece.countSquares();
    return expected !== this.countSquares();
  }

}
