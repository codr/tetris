import { Pipe, PipeTransform } from '@angular/core';

import { Color } from './color.enum';

const COLOR_MAP = {
  [Color.None]: 'transparent',
  [Color.Cyan]: '#0FF',
  [Color.Blue]: '#00F',
  [Color.Orange]: '#00A5FF',
  [Color.Yellow]: '#FF0',
  [Color.Lime]: '#0F0',
  [Color.Purple]: '#A0F',
  [Color.Red]: '#F00',
};

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {

  transform(value: Color): string {
    return COLOR_MAP[value];
  }

}
