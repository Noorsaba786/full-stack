//Destructuring in function parameters

const user = {
  name: "saba",
  age: 12,
};

// without destructuring
/* 
const greet = (user) => {
  return "hello " + user.name + " you have " + user.age + " years old";
};

console.log(greet(user));
 */

// with destructuring

const greet = ({ name, age }) => {
  return `hello ${name} and congrats you have became ${age} years old`;
};

console.log(greet(user));
