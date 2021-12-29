import { Color } from '../color.enum';
import { Piece } from './piece';
import { PieceType } from './piece-type.enum';

export class PieceJ extends Piece {
  readonly type = PieceType.J;
  color = Color.Blue;
  protected layer = [[1, 1, 1],
                     [0, 0, 1]];

}
