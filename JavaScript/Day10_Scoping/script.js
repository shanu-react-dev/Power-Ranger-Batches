//! variables created with var keyword follows global scopes.
// console.log(firstNum); // undefined
// var firstNum = 10;
// console.log(firstNum);

// // console.log(secondNum);
// let secondNum = 7;
// console.log(secondNum);

// const thirdNum = 89;
// console.log(thirdNum);
// var b = "Sundari";

// let a = "Shanu";
//! Block Scope followed by variable created with let and const keyword
// for (let i = 0; i < 10; i++) {
//   console.log(i + 1);
// }
// console.log(i);
// console.log(a);

// for (var b = 10; b >= 0; b--) {
//   console.log(b);
//   const myName = "Kalees";
//   console.log(myName);
// }

// console.log(b);
// console.log(myName);

// var firstNum = 1;

// function myName() {
//   console.log(firstNum);
//   var secNum = 42;
//   let thirdNum = 38;
//   const fourthNum = 100;
//   var firstNum = "Shanu";
//   console.log(secNum);
//   console.log(thirdNum);
//   console.log(fourthNum);
//   console.log(firstNum);
// }

// myName();
// console.log(secNum);
// console.log(thirdNum);
// console.log(fourthNum);
// console.log(firstNum);

var a = 7;
console.log(a); //7
let b = 10;
console.log(b); //10
const c = "15";
console.log(c); // '15'

if (true) {
  var a = 9;
  console.log(a); // 9
  let b = 29;
  console.log(b); //29
  const c = 20;
  console.log(c); //20
}

console.log(a); //9
console.log(b); //10
console.log(c); //15

function namedFunction() {
  var a = "Shanu";
  console.log(a); //Shanu
  let b = "Kalees";
  console.log(b); // Kalees
  const c = "Bugatti";
  console.log(c); //Bugatti
}
namedFunction();

console.log(a); //9
console.log(b); //10
console.log(c); //15
