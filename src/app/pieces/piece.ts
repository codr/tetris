import { Color } from '../color.enum';
import { PieceType } from './piece-type.enum';
import { Square } from '../square';
import { Util } from '../util';

import { PieceI } from './piece-i';

export abstract class Piece {
  abstract type: PieceType;
  abstract color: Color;
  protected abstract layer: Array<Array<number>>;

  static newPiece(type?: PieceType) {
    return new PieceI();
  }

  randomType(): PieceType {
    let keys = Object.keys(PieceType);
    let size = keys.length / 2;
    return Math.floor(Math.random() + size);
  }

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

const colorPieceTypeMap = {
  [PieceType.I]: Color.Cyan,
  [PieceType.J]: Color.Blue,
  [PieceType.L]: Color.Orange,
  [PieceType.O]: Color.Yellow,
  [PieceType.S]: Color.Lime,
  [PieceType.T]: Color.Purple,
  [PieceType.Z]: Color.Red,
};
