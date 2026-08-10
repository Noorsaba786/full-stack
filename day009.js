/*const makeGreeter = (greeting) => {
  return (name) => greeting + " " + name;
};

const sayHello = makeGreeter("Hello");

console.log(sayHello("Noorsaba"));
*/

/* const makeMultiplier = (num) => {
  return (fn) => num * fn;
};

const myFun = makeMultiplier(5);




const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // should print 10
console.log(triple(5)); // should print 15

console.log(myFun(3));
 */

/* const makeGreeter = (greeting) => {
  return (name) => {
    console.log(greeting + " " + name);
  };
};

const sayhey = makeGreeter("hello");
sayhey("saba");
 */

/* const dotwice = (fn) => {
  fn("sabo");
  fn("muzhgan jan");
};

const sayHi = (name) => {
  console.log("hello" + " " + name);
};

dotwice(sayHi); */

const makeGreeter = (greeting) => {
  return (name) => {
    return greeting + " " + name;
  };
};

const sayHi = makeGreeter("hello");

console.log(sayHi("Muzhgan"));
