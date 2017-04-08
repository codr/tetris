import { Color } from '../color.enum';
import { Piece } from './piece';
import { PieceType } from './piece-type.enum';

export class PieceZ extends Piece {
  readonly type = PieceType.Z;
  color = Color.Red;
  protected layer = [[1, 1, 0],
                   [0, 1, 1]];

}
