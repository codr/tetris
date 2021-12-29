import { Color } from '../color.enum';
import { Piece } from './piece';
import { PieceType } from './piece-type.enum';

export class PieceT extends Piece {
  readonly type = PieceType.T;
  color = Color.Purple;
  protected layer = [[1, 1, 1],
                     [0, 1, 0]];

}
