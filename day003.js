//Part5

//###### FizzBuzz #######
/*Exercise 1 — FizzBuzz:
Write a function called getFizzBuzz that takes a number.

If divisible by 3 return "Fizz"
If divisible by 5 return "Buzz"
If divisible by both return "FizzBuzz"
Otherwise return the number
*/
/* const getFizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    return console.log(num);
  }
};

getFizzBuzz(3);
getFizzBuzz(5);
getFizzBuzz(15);
getFizzBuzz(7); */

//###### FindLargest #######
/*Write a function called findLargest that takes an array of numbers and returns the largest one. No Math.max allowed. Use a loop
 */

/* const myarray = [3, 4, , 4, 234];
let largest = myarray[0];
const findLargest = (myarray) => {
  for (const num of myarray) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
};

console.log(findLargest(myarray));
 */

// for loop

/* for (let i = 0; i <= 10; i++) {
  console.log(i);
}
 */

// for-array

/* const myArray = ["HTML", "CSS", "JAVASCRIPT"];
for (const i of myArray) {
  console.log(i);
}
 */

//write a loop that prints only even num form 1 to 20
//method 1
/* for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
 */

// method 2

/* for (i = 1; i <= 20; i += 2) {
  console.log(i);
}
 */

// EXO FizzBuzz
// wrtie a fun name getFizzBuzz which take a num and if the num is div by 3 then print Fizz and if the num is div by 5 then return buzz and if the num is div by both then print Fizzbuzz otherwise it should print the num itself

const getFizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
};

getFizzBuzz(3);
getFizzBuzz(6);
getFizzBuzz(9);
getFizzBuzz(12);
getFizzBuzz(15);
