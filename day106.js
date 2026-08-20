// Destruction

const user = {
  myName: "saba",
  age: 23,
  country: "Afghanistan",
};
// old way to extract values
/* const myName = user.name;
const myAge = user.age;
console.log(myName);
console.log(myAge); */
/* 
const { myName, age, country } = user;

console.log(myName);
console.log(age);
console.log(country); */

// Destructuring with default value

const { myName, age, country, phone = "default" } = user;
console.log(myName);
console.log(age);
console.log(country);
console.log(phone);
