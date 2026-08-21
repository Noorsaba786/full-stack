//#### Exercise 3
/* Exercise 3:
Write a function called getProductInfo that takes a product object, destructures it in the parameters, and returns a string like:
"Laptop costs $999 - Electronics - In Stock"
 */
const product = {
  name: "Laptop",
  price: 999,
  category: "Electronics",
  inStock: true,
};

const getProductInfo = ({ name, price, category, inStock }) => {
  const stockStatus = inStock ? "In Stock" : "Out of Stock";
  return `${name} - $${price} - ${category} - ${stockStatus} `;
};

console.log(getProductInfo(product));

//Exercise 4:
/* Create two objects user1 and user2. Merge them into one object using the spread operator.
 */

const user1 = {
  name: "saba",
  id: 12,
};

const user2 = {
  country: "afg",
  city: "kabul",
};

const mergeObj = { ...user1, ...user2 };

console.log(mergeObj);
