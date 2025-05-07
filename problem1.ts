{
  /* Description: Create a function that takes a string and an optional boolean.

If the boolean is true or not provided, return the string in uppercase.
If the boolean is false, return the string in lowercase. */

  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper !== false) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }

  //   example

  console.log(formatString("Hello"));
  console.log(formatString("Hello", true));
  console.log(formatString("Hello", false));

  //   ternary operator
  function formatStringTernary(input: string, toUpper?: boolean): string {
    return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
  }
}
