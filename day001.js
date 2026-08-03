// javaScript exo
// back tic `
// const
/*
const name = "saba";
name = "ahmad";
console.log(name);
*/
// let example
/*
let name = "noor";
name = "saba";
console.log(name);
*/
/*
const myName = "Noorsaba";
let myAge = 24;
const isStudent = true;

console.log(myName);
console.log(myAge);
console.log(isStudent);

*/

/*
let score = 0;
console.log(score);

score = 100;
console.log(score);

const country = "France";
country = "spain";
console.log(country);
*/

///////////template literal

/*
const name = "saba";
const city = "kabul";

console.log(`my name is  ${name} and i live in kabul ${city}`);
*/
/*
console.log(10 > 5);
*/

/*
const name = "Noorsaba";
const age = 20;
const isStudent = true;
let score;
const selectedItem = null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof score);
console.log(typeof selectedItem);

console.log(`My name is ${name}, I am ${age} years old`);
*/

////////// the backtick templete literal exo
/*
const firstName = "Noorsaba";
const lastName = "Safi";
const age = 20;

console.log(`${firstName} ${lastName} is ${age} years old`);
console.log(typeof age);
console.log(typeof `${age}`);
*/
/*
function great(name) {
  return ` hello ${name} `;
}

console.log(great("saba"));
*/

/*
let score = 0;
score = 5;
score = 100;
console.log(score);

const name = "saba";
name = "muzhgan jan";
console.log(name);


const  noorSabaJan 
const  NoorSaba  
const   noor_saba 

*/
/*
const name = " Ahmad ";
const msg = ` heyyy  ${name}`;
console.log(msg);
*/
/*
let num = 12;
console.log(typeof num);
console.log(typeof `${num}`);

const age = 12;
console.log(typeof age);

console.log(10 > 5);

let myname;
console.log(myname);

let myAge = null;
console.log(myAge);

*/

/* console.log(object); */
/* console.log("hello saba");
console.log("hello Muzhgan");
console.log("hello Noor");

const great = (name) => {
  return console.log(` Hello  ${name} `);
};

let myVar = great("saba");
console.log(myVar);
 */

/* function greet(name) {
  return ` hey ${name}`;
}

console.log(greet("saba"));
 */

/* const greet = function (name) {
  return " hello" + name;
};
console.log(greet("saba"));
 */
/* 
const great = (name) => {
  return " hello" + name;
};

console.log(great("saba"));
 */
// there are three types of function in generale

// first type
// funciton  deleration
/* function greet(name) {
  return `heyyy ${name}`;
}

console.log(greet("saba"));

 */

//sec type or sec format of a function expression

/* const greet = function (name) {
  return `if  you know you know ${name}`;
};

console.log(greet("SAFI"));
 */

//Third type of a funciton is arrow fun
/* 
const greet = (name) => {
  return `do you want to live with disipline  ${name}`;
};

console.log(greet("Noorsaba SAFI ? "));
/*  */

/* const greet = (name) => {
  return `hey ${name}`;
};

const add = (a, b) => {
  return ` here is the result of a+b ${a + b}`;
};

const double = (n) => {
  return ` here is the double of the num which is ${n * 2}`;
};

console.log(greet("my dearest saba"));
console.log(add(3, 4));
console.log(double(3));
 */

// Exo 1
//Write a function called multiply that takes two numbers and returns their product.
/* 
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(4, 5));

const isAdult = (age) => {
  return age >= 18;
};

console.log(isAdult(30));

const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(fullName("Noorsaba", "safi"));
 */

/* const checkAge = (age) => {
  if (age >= 18) {
    return "Adult";
  } else if (age >= 13) {
    return "Teenager";
  } else {
    return "Child";
  }
};

console.log(checkAge(20));
console.log(checkAge(15));
console.log(checkAge(8));
 */

/* const getGrade = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else {
    return "F";
  }
};

console.log(getGrade(95)); // should print A
console.log(getGrade(85)); // should print B
console.log(getGrade(75)); // should print C
console.log(getGrade(60)); // should print F
 */

/* const grade = (studentGrade) => {
  if (studentGrade >= 90) {
    return " Group A";
  } else if (studentGrade >= 80) {
    return " Group B";
  } else if (studentGrade >= 70) {
    return " Group C";
  } else {
    return "Group f";
  }
};

console.log(grade(95));
console.log(grade(0));
console.log(grade(75));
 */

//Trinary operator

const age = 2;
const status = age >= 18 ? "young Lady" : " your a child ";
// condition ? value if true : value if false
console.log(status);
