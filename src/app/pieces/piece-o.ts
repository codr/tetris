import { Color } from '../color.enum';
import { Piece } from './piece';
import { PieceType } from './piece-type.enum';

export class PieceO extends Piece {
  readonly type = PieceType.O;
  color = Color.Yellow;
  protected layer = [[1, 1],
                     [1, 1]];

}
