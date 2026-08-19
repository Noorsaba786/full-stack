const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter((n) => n % 2 === 0);
// [2, 4, 6, 8, 10]

const greaterThan5 = numbers.filter((n) => n > 5);
// [6, 7, 8, 9, 10]

const users = [
  { name: "Noorsaba", age: 20 },
  { name: "Sara", age: 16 },
  { name: "Ahmed", age: 25 },
];

const adults = users.filter((user) => user.age >= 18);
// [{ name: "Noorsaba" }, { name: "Ahmed" }]
