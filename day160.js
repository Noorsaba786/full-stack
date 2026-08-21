// object
/* 
const user = {
  name: "Muzhgan",
  id: 12,
};

user.id = 18;
console.log(user.name);
console["log"](user.id); // another way of writing conosle.log with braket notation
 */

/* 

Exercise 2:
Destructure the product object into separate variables in one line. Log them all.

Exercise 3:
Write a function called getProductInfo that takes a product object, destructures it in the parameters, and returns a string like:
"Laptop costs $999 - Electronics - In Stock"

Exercise 4:
Create two objects user1 and user2. Merge them into one object using the spread operator. */

//Exercise 1:
/* Create an object called product with: name, price, category, inStock. Log each property using dot notation.
 */

/* const product = {
  name: "Laptop",
  price: 999,
  catagory: "Electronic",
  inStock: true,
};
 */
/* console.log(product.name);
console.log(product.price);
console.log(product.catagory);
console.log(product.inStock); */

/* 
Exercise 2:
Destructure the product object into separate variables in one line. Log them all.
 */

/* const { name, price, catagory, inStock } = product; */

/* 
Exercise 3:
Write a function called getProductInfo that takes a product object, destructures it in the parameters, and returns a string like:
"Laptop costs $999 - Electronics - In Stock" */
/* const getProductInfo = ({ name, price, catagory, inStock }) => {
  return `${name} cost  ${price} - ${catagory} ${inStock ? "inStock" : "Notinstock"} `;
};

console.log(getProductInfo(product)); */

// Exercise 4:
// Create two objects user1 and user2. Merge them into one object using the spread operator. */

/* const user1 = {
  name: "muzhgan",
  id: 1,
};

const user2 = {
  myName: "saba",
  id: 2002,
};

const mergeUsers = { ...user1, ...user2 };
console.log(mergeUsers);
 */

//Nested object
/* 
const myObj = {
  name: "Muzhgan jan",
  id: 1,
  address: {
    city: "kabul",
    coutry: "afghanistan",
  },
};

const {
  name,
  id,
  address: { city, coutry },
} = myObj;

console.log(name, city, coutry);
 */

const user = {
  name: "muzhgan",
  id: 1,
  myfun: () => {
    return "heyy ";
  },
};

console.log(user.myfun());
