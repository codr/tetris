import { Square } from './square';

export const NUMBER_ROWS = 20;
export const NUMBER_COLS = 12;

export class Board {

  static generateBoard() {
    return Array.from({length: NUMBER_ROWS}, Board.generateRow)
  }

  static generateRow() {
    return Array.from({length: NUMBER_COLS}, Board.generateSquare);
  }

  static generateSquare() {
    return new Square();
  }
}
