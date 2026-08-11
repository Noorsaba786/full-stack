// function Recursive
//exo 1 decrement num
/* const decrementNum = (num) => {
  if (num == 0) {
    console.log("done");
    return;
  } else {
    console.log(num);
    decrementNum(num - 1);
  }
};

decrementNum(5);
 */
// factorial
/* 
const factorial = (n) => {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));
 */
// 5 x fac(4) 5 x 24 = 120
// 4 x fac(3) = 4x 6 = 24
// 3 x fac(2)  3x 2 = 6
// 2 x fac(1) = 2 x 1 = 2
// 1 x fac (1) = 1
/* 
let myArray = [1, 2, 3, 4];
const sumArray = (myArray) => {
  if (myArray[0] == 0) {
    return 0;
  } else {
    return +sumArray(n - 1);
  }
};

console.log(myArray);
 */

// write a recursive fun which decrements its value ; ex : 5 , 5 , 4 , 3 2, 1 0
/* 
const cutDown = (num) => {
  if (num == 0) {
    return 0;
  }
  console.log(num); // 5 4 3 2 1
  return cutDown(num - 1); // // 5-1 = 4 , 4-1 = 3  , 3-1 = 2 , 2-1= 1 ,  1-1 = 0 ,done
};

console.log(cutDown(5));
 */

// 0! = 1
// 1! = 1
// 2! = 2
// 3! = 6
// 4! = 1 x 2 x 3 x 4 = 24
// 5! = 1 x 2 x 4 x5 = 120
// formule = n! = n * (n-1)! , 6 *(6-1)! = 6 * (5)! = 6 * 120 = 720

const factorial = (num) => {
  if (num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(6));

// 6 : 6 * fac(6-1) = 6 * fac(5) = 6 * 120= 720
// 5 : 5 * fac (5-1) = 5 * fac(4) = 5 * 24 = 120
// 4 : 4 * fac (4 -1) = 4 * fac(3)= 4 *6 = 24
// 3 : 3 * fac (3-1 ) = 3 * fac(2)  = 3 * 2 = 6
// 2 : 2 * fac ( 2 -1) = 2 * fac(1) = 2 * 1 = 2
// 1 : 1  = 1
