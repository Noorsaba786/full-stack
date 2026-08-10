// High Order functions when a fun takes another fun as input or it takes another fun as an argument or output its called high order function
/*
const dotrice = (fn) => {
  fn();
  fn();
  fn();
};

const sayHi = () => {
  console.log("Hi its first time i am working with these type of functions  ");
};




dotrice(sayHi);

*/

const dotwice = (fn1, value) => {
  fn1(value);
  fn1(value);
};

const greet = (name) => {
  console.log("heyy" + name);
};

dotwice(greet, "Noor");
