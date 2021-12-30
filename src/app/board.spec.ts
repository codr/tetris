import { Board } from './board';
import { Square } from './square';

describe('Board', () => {
  it('creates a board', () => {
    const board = new Board().draw();

    expect(board).toBeTruthy();
    expect(board.length).toBe(20);
    expect(board[0].length).toBe(12);
  });

  it('fills the board with null', () => {
    const board = new Board().draw();

    expect(board[0][0]).toBeInstanceOf(Square);
  });
});
