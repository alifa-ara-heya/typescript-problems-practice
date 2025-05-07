{
  /* Description: Write a function that takes a string | number and returns:

The length if it's a string
The number multiplied by 2 if it's a number */

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  //   example

  console.log(processValue("hello"));
  console.log(processValue(10));
}
