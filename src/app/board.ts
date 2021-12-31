import {Piece} from './pieces';
import {Square} from './square';
import {Util} from './util';

export const NUMBER_ROWS = 20;
export const NUMBER_COLS = 12;

export class Board {

  private squares = Board.generateBoard();

  draw(piece: Piece, offsetColumn: number, offsetRow: number): Square[][];
  draw(): Square[][];
  draw(piece?: Piece, offsetColumn?: number, offsetRow?: number): Square[][] {
    if (!piece) {
      return this.squares;
    } else {
      return this.overlay(piece, offsetColumn, offsetRow);
    }
  }

  place(piece: Piece, offsetColumn: number, offsetRow: number) {
    this.squares = this.overlay(piece, offsetColumn, offsetRow);
  }

  canPlace(piece: Piece, offsetColumn: number, offsetRow: number): boolean {
    const expected = Util.count(this.squares, s => s.isOccupied) + piece.countSquares();
    return expected === Util.count(this.overlay(piece, offsetColumn, offsetRow), s => s.isOccupied);
  }

  removeCompleteRows() {
    const remainingRows = this.squares.filter(row => {
      return !row.every((s => s.isOccupied));
    });
    const numberOfRemovedRows = this.squares.length - remainingRows.length;
    if (numberOfRemovedRows) {
      remainingRows.unshift(...Board.generateBoard(numberOfRemovedRows));
      this.squares = remainingRows;
    }
  }

  private overlay(piece: Piece, offsetColumn: number, offsetRow: number): Square[][] {
    return this.squares.map((row, y) =>
      row.map((square, x) =>
        piece.getSquareAt(x + offsetColumn, y + offsetRow) || square
      )
    );
  }

  private static generateBoard(numberOfRows = NUMBER_ROWS) {
    return Array.from({length: numberOfRows}, Board.generateRow)
  }

  private static generateRow() {
    return Array.from({length: NUMBER_COLS}, Board.generateSquare);
  }

  private static generateSquare() {
    return new Square();
  }
}
