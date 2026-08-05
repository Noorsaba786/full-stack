// for loops
/* for (let i = 1; i <= 10; i++) {
  console.log(i);
}
 */

// for array

/* const skills = ["html", "css", "js", "C#"];
{
  for (const skill of skills) {
    console.log(skill);
  }
}
 */

// write a loop that prints only even numbers from 1 to 20
//Method 1:

for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Second Method
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
