import { Util } from './util';

describe('Util', () => {

  describe('transpose', () => {
    it('transposes an array', () => {
      let array = [[1,2,3],
                  [1,2,3],
                  [1,2,3]];
      let expectedArray = [[1,1,1],
                          [2,2,2],
                          [3,3,3]];
      let transposedArray = Util.transpose(array);
      expect(transposedArray).toEqual(expectedArray);
    })

    it('transposes a small array', () => {
      let array = [[1,0,2],
                  [4,0,3]];
      let expectedArray = [[1,4],
                          [0,0],
                          [2,3]];
      let transposedArray = Util.transpose(array);
      expect(transposedArray).toEqual(expectedArray);
    });
  });

  describe('reveseRows', () => {
    it('reverses a row', () => {
      let array = [[1,1,1],
                  [2,2,2],
                  [3,3,3]];
      let expectedArray = [[3,3,3],
                          [2,2,2],
                          [1,1,1]];
      let reversedArray = Util.reveseRows(array);
      expect(reversedArray).toEqual(expectedArray);
    });
  });

  describe('rotate', () => {
    it('rotates an array', () => {
      let array = [[1,1,1],
                  [2,2,2],
                  [3,3,3]];
      let expectedArray = [[1,2,3],
                          [1,2,3],
                          [1,2,3]];
      let rotatedArray = Util.rotate(array);
      expect(rotatedArray).toEqual(expectedArray);
    });
  });

});
