import { Color } from '../color.enum';
import { Piece } from './piece';
import { PieceType } from './piece-type.enum';

export class PieceS extends Piece {
  readonly type = PieceType.S;
  color = Color.Lime;
  protected layer = [[0, 1, 1],
                   [1, 1, 0]];

}
