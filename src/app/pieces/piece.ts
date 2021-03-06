import { Color } from '../color.enum';
import { PieceType } from './piece-type.enum';
import { Square } from '../square';
import { Util } from '../util';

export abstract class Piece {
  abstract type: PieceType;
  abstract color: Color;
  protected abstract layer: Array<Array<number>>;

  rotate() {
    this.layer = Util.rotate(this.layer);
  }

  draw(): Array<Array<Square>> {
    return this.layer.map(row =>
      row.map( b =>
        new Square(b ? this.color : Color.None)
      )
    )
  }

}
