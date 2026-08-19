// 1. map
const a = [1, 2, 3, 4, 5];
console.log(a.map((n) => n * n));
// 2. filter
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(b.filter((n) => n % 2 !== 0));
// 3. reduce
console.log(a.reduce((sum, n) => sum + n, 0));
// 4. Users
const users = [
  { name: "Noorsaba", age: 20, active: true },
  { name: "Sara", age: 16, active: false },
  { name: "Ahmed", age: 25, active: true },
  { name: "Ali", age: 15, active: true },
];
console.log(users.filter((u) => u.active));
console.log(users.map((u) => u.name));
console.log(users.find((u) => u.name === "Ahmed"));
console.log(users.some((u) => u.age < 18));
console.log(users.every((u) => u.age > 13));
// 5. Active adults
console.log(users.filter((u) => u.active && u.age >= 18).map((u) => u.name));
// 6. Count numbers
const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log(
  nums.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  }, {}),
);
// 7. Average age
console.log(users.reduce((sum, u) => sum + u.age, 0) / users.length);
