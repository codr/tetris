import { PieceType } from './piece-type.enum';
import { PieceI } from './piece-i';

export class PieceFactory {

  static newPiece(type?: PieceType) {
    return new PieceI();
  }

  static randomType(): PieceType {
    let keys = Object.keys(PieceType);
    let size = keys.length / 2;
    return Math.floor(Math.random() + size);
  }

}

/*
const colorPieceTypeMap = {
  [PieceType.I]: Color.Cyan,
  [PieceType.J]: Color.Blue,
  [PieceType.L]: Color.Orange,
  [PieceType.O]: Color.Yellow,
  [PieceType.S]: Color.Lime,
  [PieceType.T]: Color.Purple,
  [PieceType.Z]: Color.Red,
};
*/
