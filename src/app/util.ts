export class Util {

  static rotate(arr: Array<Array<any>>) {
    return this.reveseRows(this.transpose(arr));
  }

  static transpose(arr: Array<Array<any>>) {
    return arr[0].map((col, i) =>
      arr.map(row =>
        row[i]
      )
    )
  }

  static reveseRows(arr: Array<Array<any>>) {
    let newArr = [];
    arr.forEach((row, i) => {
      newArr[arr.length - 1 - i] = row;
    });
    return newArr;
  }

  static flatten(arr: Array<any>): Array<any> {
    return arr.reduce((acc, val) =>
      acc.concat(Array.isArray(val) ? Util.flatten(val) : [val])
    , []);
  }

}
