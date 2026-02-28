// console.log(
//   "JavaScript is a Programming Language... along with Client side Scripting Language..",
// );

//!Loops
//? Loop is an iteration method or technique which will iterate the particular line of code until and unless the condition gets false. It is also known as control statement.
//? In JS we have multiple loops
//! 1. While
// let number = 0;
// while (number <= 10) {
//   console.log("Hii I am Shanu");
//   console.log(number);
//   number++;
// }

//? Print even numbers between 0 to 100
// let providedNumber = 0;
// while (providedNumber <= 100) {
//   if (providedNumber % 2 == 0) {
//     console.log(providedNumber + " It is an even number");
//   } else {
//     console.log(providedNumber + " It is an odd number");
//   }
//   providedNumber++;
// }

//! Print the pattern as provided
//? *
//? **
//? ***
//? ****
// let i = 1;
// let star = "";
// while (i <= 4) {
//   star += "*";
//   console.log(star);
//   i++;
// }
//! 2. do while
// let num1 = 0;
// do {
//   console.log("I am Sanu...");
//   num1++;
// } while (num1 <= 10);

// let rows = 4;
// let i = rows;

// while (i > 0) {
//   let j = 0;
//   let star = "";

//   while (j < i) {
//     star += "*";
//     j++;
//   }

//   console.log(star);
//   i--;
// }
//! 3. for
let star = "";
for (let i = 5; i >= 1; i--) {
  //   console.log("Sorry!! 🫥🫥🫥🫥");
  star += "*";
  console.log(star);
}
