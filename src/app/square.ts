import {Color} from './color.enum';
import { Piece } from './pieces';

export class Square {
  readonly isOccupied = this.fromPiece !== null;
  readonly color = this.fromPiece?.color || Color.None;

  constructor(
    private readonly fromPiece: Piece|null = null,
  ) {}

}
