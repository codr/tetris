type Flattened<T> = T extends Array<infer U> ? Flattened<U> : T;

export class Util {

  static rotate<T>(arr: Array<Array<T>>) {
    return this.reveseRows(this.transpose(arr));
  }

  static transpose<T>(arr: Array<Array<T>>) {
    return arr[0].map((col, i) =>
      arr.map(row => row[i])
    )
  }

  static reveseRows<T>(arr: Array<T>) {
    return arr.reduce<Array<T>>((newArray, item, index) => {
      newArray[arr.length - 1 - index] = item;
      return newArray;
    }, []);
  }

  static flatten<T>(arr: Array<T>): Flattened<T>[] {
    return arr.reduce((acc, val) =>
      acc.concat(Array.isArray(val) ? Util.flatten(val) : [val])
    , []);
  }

  static count<T>(arr: T[], fn: (item: Flattened<T>) => boolean): number {
    return Util.flatten(arr).reduce((acc, cur) => fn(cur) ? ++acc : acc, 0);
  }

}
