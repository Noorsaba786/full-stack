/* Write a function called square that takes a number and returns it multiplied by itself. Use an arrow function.
 */

const square = (getNum) => {
  return getNum * getNum;
};

console.log(square(5));

/*write a while loop that keeps asking the user to enter a number greater than 10 using prompt() and stops when they do.
 */

let num = false;
let count = 0;
while (num == false) {
  let enterNum = Number(prompt("enter a num greater than 10  "));

  count++;
  if (enterNum > 10) {
    num = true;
    alert(
      "Good, you enterd a num greater than 10 and you typed greater than 10 in this  attemp " +
        count,
    );
  } else {
    alert("try again!");
  }
}
