import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Board, NUMBER_COLS } from './board';
import { Square } from './square';

import {GameOverDialogComponent} from './game-over-dialog/game-over-dialog.component';
import {PieceQueueService} from './piece-queue.service';

const START_COL = ((NUMBER_COLS / 2) - 1) * -1;
const TICK = 1000;

@Injectable()
export class GameService {
  private board: Board;
  private activePiece = this.pieceQueue.pop();
  private offsetColumn = START_COL;
  private offsetRow = 0;
  private timer: ReturnType<typeof setTimeout>;

  constructor(
    private readonly dialog: MatDialog,
    private readonly pieceQueue: PieceQueueService,
  ) {
    this.startNewGame();
  }

  startNewGame() {
    this.board = new Board();
    this.waitThenTick();
  }

  private waitThenTick() {
    clearTimeout(this.timer);
    if (!this.canPlaceActivePiece()) {
      this.showGameOver();
      return;
    }
    this.timer = setTimeout(() => this.tick(), TICK);
  }

  private tick() {
    this.moveDown();
  }

  private showGameOver() {
    this.dialog.open(GameOverDialogComponent).afterClosed().subscribe(() => {
      this.startNewGame();
    });
  }

  getStage(): Square[][] {
    return this.board.draw(this.activePiece, this.offsetColumn, this.offsetRow);
  }

  private canPlaveActivePiece(column: number, row: number): boolean {
    return this.board.canPlace(this.activePiece, column, row);
  }

  moveRight() {
    if (this.canPlaveActivePiece(this.offsetColumn-1, this.offsetRow)) {
      this.offsetColumn--;
    }
  }

  moveLeft() {
    if (this.canPlaveActivePiece(this.offsetColumn+1, this.offsetRow)) {
      this.offsetColumn++;
    }
  }

  moveDown() {
    if (this.canPlaveActivePiece(this.offsetColumn, this.offsetRow-1)){
      this.offsetRow--;
    } else {
      this.placePiece();
      this.addNextPiece();
    }
    this.waitThenTick();
  }

  rotate() {
    this.activePiece.rotate();
    if (this.board.canPlace(this.activePiece, this.offsetColumn, this.offsetRow)) {
      return;
    }
    // Can't make move.
    this.activePiece.rotate();
    this.activePiece.rotate();
    this.activePiece.rotate();
  }

  private placePiece() {
    this.board.place(this.activePiece, this.offsetColumn, this.offsetRow);
    this.board.removeCompleteRows();
  }

  private addNextPiece() {
    this.activePiece = this.pieceQueue.pop();
    this.offsetRow = 0;
    this.offsetColumn = START_COL;
  }

  private canPlaceActivePiece(): boolean {
    return this.board.canPlace(this.activePiece, this.offsetColumn, this.offsetRow);
  }

}
