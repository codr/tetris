import { Color } from './color.enum';

export class Square {

  constructor(public color = Color.None) {}

  isOccupied(): boolean  {
    return this.color !== Color.None;
  }

}
