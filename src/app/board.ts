import { Square } from './square';

export const NUMBER_ROWS = 20;
export const NUMBER_COLS = 12;

export class Board {

  static generateBoard() {
    const board = Array(NUMBER_ROWS).fill(null);
    board.forEach(Board.generateRow);
    return board;
  }

  static generateRow(row, index, rows) {
    rows[index] = Array(NUMBER_COLS).fill(null);
    rows[index].forEach(Board.generateSquare);
  }

  static generateSquare(square, index, row) {
    row[index] = new Square();
  }
}
