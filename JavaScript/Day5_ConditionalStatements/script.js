// console.log("Shanu is a good person!!");

// let isMarried = true;
// if (isMarried) {
//   console.log("You have a good relationship");
// } else {
//   console.log("Find your life Partner");
// }

let gender = "male";
let age = 20;
let hasGf = true;
//! Nested if else
//? it is a conditional statement which allows you to check the conditions level by level. Here you can go with multiple nested if else block.
if (gender === "male") {
  console.log("Move for next step");
  if (age > 18) {
    console.log("Move for the next step");
    if (hasGf == true) {
      console.log("Get married");
    } else {
      console.log("Go and get a life partner");
    }
  } else {
    console.log("You are under age");
  }
} else {
  console.log("Your parents will not allow");
}
