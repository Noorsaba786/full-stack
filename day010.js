// Exercise 2 : Closeur

/* let mycount = () => {
  let count = 0;
  count++;
  return count;
};

console.log(mycount());
console.log(mycount());
console.log(mycount());
console.log(mycount()); */

// but here since we used closure  even inside the fun its accessible the varible and it prints 1  2 3

let increamentNum = () => {
  let count = 0;
  return (countFun = () => {
    count++;
    return count;
  });
};

let printFun = increamentNum();

console.log(printFun());
console.log(printFun());
console.log(printFun());

