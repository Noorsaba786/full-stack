//Object Exercices
// #### Exercise 1:
//Create an object called product with: name, price, category, inStock. Log each property using dot notation.

const product = {
  name: "Lays",
  price: 5,
  category: "snacks",
  inStock: true,
};

/* console.log(product.name);
console.log(product.price);
console.log(product.category);
console.log(product.inStock);
 */
//#### Exercise 2:
//Destructure the product object into separate variables in one line. Log them all.
const { name, price, category, inStock } = product;
console.log(name);
console.log(price);
console.log(category);
console.log(inStock);
