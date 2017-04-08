import { Color } from '../color.enum';
import { Piece } from './piece';
import { PieceType } from './piece-type.enum';

export class PieceL extends Piece {
  readonly type = PieceType.L;
  color = Color.Orange;
  protected layer = [[1, 1, 1],
                   [1, 0, 0]];

}
