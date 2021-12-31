import { Board } from './board';
import {PieceJ} from './pieces/piece-j';
import { Square } from './square';

describe('Board', () => {
  it('creates a board', () => {
    const squares = new Board().draw();

    expect(squares).toBeTruthy();
    expect(squares.length).toBe(20);
    expect(squares[0].length).toBe(12);
  });

  it('fills the board with null', () => {
    const squares = new Board().draw();

    expect(squares[0][0]).toBeInstanceOf(Square);
  });

  it('removes complete rows', () => {
    const board = new Board();
    const piece = new PieceJ();
    piece.rotate();
    piece.rotate();
    board.place(piece, 0, -18);
    board.place(piece, -3, -18);
    board.place(piece, -6, -18);
    board.place(piece, -9, -18);

    board.removeCompleteRows();

    const squares = board.draw();
    expect(squares[19]).toEqual([
      jasmine.objectContaining({isOccupied: true}),
      jasmine.objectContaining({isOccupied: false}),
      jasmine.objectContaining({isOccupied: false}),
      jasmine.objectContaining({isOccupied: true}),
      jasmine.objectContaining({isOccupied: false}),
      jasmine.objectContaining({isOccupied: false}),
      jasmine.objectContaining({isOccupied: true}),
      jasmine.objectContaining({isOccupied: false}),
      jasmine.objectContaining({isOccupied: false}),
      jasmine.objectContaining({isOccupied: true}),
      jasmine.objectContaining({isOccupied: false}),
      jasmine.objectContaining({isOccupied: false}),
    ]);
  });
});
