{
  /* Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters. */

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }

  console.log(concatenateArrays(["a", "b"], ["c"]));
  console.log(concatenateArrays([1, 2], [3, 4], [5]));
}
