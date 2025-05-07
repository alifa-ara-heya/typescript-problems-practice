{
  /* Create an async function that:

Returns the square of a number after 1 second
Rejects if the number is negative */

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n < 0) {
        reject("negative number");
      } else {
        setTimeout(() => {
          resolve(n * n);
        }, 1000);
      }
    });
  }

  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);
}
