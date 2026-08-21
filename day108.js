//Destructuring in fucniton with parameters
const user = {
  name: "saba",
  age: 12,
};

const greet = ({ name, age, country = "default" }) => {
  return `heyyy ${name} you have ${age} , u r from ${country}`;
};

console.log(greet(user));
