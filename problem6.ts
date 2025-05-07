{
  /* Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null. */

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    let mostExpensiveProduct = products[0];
    products.forEach((product) => {
      if (product.price > mostExpensiveProduct.price) {
        mostExpensiveProduct = product;
      }
    });
    return mostExpensiveProduct;
  }

  // example

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  //   const emptyArr = [];

  console.log(getMostExpensiveProduct(products));
  //   console.log(getMostExpensiveProduct(emptyArr));

  //   with reduce
}
