import { PieceType } from './piece-type.enum';
import { PieceI } from './piece-i';
import { PieceJ } from './piece-j';
import { PieceL } from './piece-l';
import { PieceO } from './piece-o';
import { PieceS } from './piece-s';
import { PieceT } from './piece-t';
import { PieceZ } from './piece-z';
import { Piece } from './piece';

const typeToPiece = {
  [PieceType.I]: PieceI,
  [PieceType.J]: PieceJ,
  [PieceType.L]: PieceL,
  [PieceType.O]: PieceO,
  [PieceType.S]: PieceS,
  [PieceType.T]: PieceT,
  [PieceType.Z]: PieceZ,
};

export class PieceFactory {

  static newPiece(type?: PieceType): Piece {
    type = type || this.randomType();
    return new typeToPiece[type]();
  }

  static randomType(): PieceType {
    const keys = Object.keys(PieceType);
    const size = keys.length / 2;
    return Math.floor(Math.random() * size);
  }

}
