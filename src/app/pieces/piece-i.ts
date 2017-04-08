import { Color } from '../color.enum';
import { Piece } from './piece';
import { PieceType } from './piece-type.enum';
import { Square } from '../square';

export class PieceI extends Piece {
  readonly type = PieceType.I;
  color = Color.Cyan;
  protected layer = [[0, 1, 0, 0],
                   [0, 1, 0, 0],
                   [0, 1, 0, 0],
                   [0, 1, 0, 0]];

}
