//array methods

// map : we use map to transform every item

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((n) => n * 2);
console.log(double);

const users = [
  { name: "noorsaba", age: 24 },
  { name: "jalal", age: 5 },
];

const user = users.map((n) => n.name);
console.log(user);
