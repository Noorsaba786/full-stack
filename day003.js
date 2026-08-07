//Part5

//###### FizzBuzz #######
/*Exercise 1 — FizzBuzz:
Write a function called getFizzBuzz that takes a number.

If divisible by 3 return "Fizz"
If divisible by 5 return "Buzz"
If divisible by both return "FizzBuzz"
Otherwise return the number
*/
/*
const getFizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
};

console.log(getFizzBuzz(3));
console.log(getFizzBuzz(5));
console.log(getFizzBuzz(15));
console.log(getFizzBuzz(7));

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

/* const getFizzBuzz = (num) => {
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
 */

/*  Rock beats Scissors → Rock crushes Scissors

Scissors beats Paper → Scissors cut Paper

Paper beats Rock  

const ourGame = (a , b ) => 
{
 
 if( a ==="rock" && b === "scissors" )
 {
    console.log("A has won");
 }
 else if (a =="scissors" && b =="Paper")
 
 {
   console.log("b has won");
 }

 else if 

}
 */

// Find largest number
/*

Write a function called findLargest that takes an array of numbers and returns the largest one. No Math.max allowed. Use a loop.

Test with: [3, 1, 4, 1, 5, 9, 2, 6]

*/
/*
myArray = [3, 1, 4, 1, 5, 9, 2, 6];
let largest = myArray[0];
const findLargest = (myArray) => {
  let largest = myArray[0];
  for (let i of myArray) {
    if (i > largest) {
      largest = i;
    }
  }
  return largest;
};

console.log(findLargest(myArray));
*/

// Write a function called letterVowels that takes a string and returns the number of vowels in it. Vowels are a, e, i, o, u.

/* const countVowels = (word) => {
  let count = 0;
  for (const letter of word) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "o" ||
      letter === "i" ||
      letter === "u" ||
      letter === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("javascript"));
 */

//  create which could take an array of a number and then it should return the largest value of that array
/*
let myArray = [55, 12, 78, 3, 51, 90, 45];

const findLargest = (myArray) => {
  let largest = myArray[0];
  for (let i of myArray) {
    if (i > largest) {
      largest = i; //90
    }
  }
  return largest;
};

console.log(findLargest(myArray));
*/

// write a function which print the count of  vowels in a word  and verify if it has vowel

const findVowel = (myword) => {
  let count = 0;
  for (const i of myword) {
    if (i === "a" || i === "i" || i === "e" || i === "u" || i === "o") {
      count++;
    }
  }
  return count;
};
console.log(findVowel("Muzhgan"));
