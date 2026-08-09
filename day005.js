//Mini project
/* 
Build a number guessing game:

Generate a random number between 1 and 100
Ask the user to guess using prompt()
Tell them too high, too low, or correct using alert()
Count how many guesses they took
Congratulate them when correct
*/

// Math.floor (math.random() * max - min  +1) + min
//  20 , 200
// Math.flooe (math.random() * 200 - 20 + 1 ) + 20

// Math.flooe (math.random() * 181 ) + 20

// Math.flooe (math.random() * 200

const secreteNumber = 20;

let count = 0;
let guess = false;

while (guess == false) {
  let guessed = Number(prompt("enter a num"));
  count++;

  if (guessed == secreteNumber) {
    guess = true;
    alert("you won congrats dearrr");
  } else if (guessed > secreteNumber) {
    alert("its tooo high");
  } else if (guessed < secreteNumber) {
    alert("its too low ");
  } else {
    alert("please wrtie a valide number");
  }
}
