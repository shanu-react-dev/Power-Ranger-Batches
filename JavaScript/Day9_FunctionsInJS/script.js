console.log("Hii Shanu will learn Function now.... with his teammates...");

// greet();
//! Function is a set of block of reusable codes which is used to perform some specific task. It is a non-primitive datatype in JavaScript. Once after declaring a function we can use it anywhere in the script file.

//? We can create a function using function keyword followed by function name followed by parameter block followed by block of reusable codes.

//todo In JS We have several functions
//! 1. Named Function
//? A  function having name is known as named function. it is also known as Function definition or function declaration. It follows Function hoisting.

//! Function Hoisting
//? Function hoisting in JavaScript is a behavior where function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed.
function greet() {
  console.log("Hii This is Named Function in JS");
}
greet();

//! 2. Anonymous Function
//? A function declared without any name is known as Anonymous function. It can be used inside another function or as an argument etc. It can't be called directly. It will throw the error as follows
//todo Uncaught SyntaxError: Function statements require a function name
// function () {
//     console.log("Hii This is Shanu..")
// }

//! 3. Function Expression
//? A function which is stored inside a variable after declaration is known as Function Expression. We can call this kind of function by there variable name.

//todo if we are declaring a named function along with variable it will be called by the variable name only.
let storedFunction = function () {
  console.log("Here is function expression..");
};
storedFunction();

let myFun = function india() {
  console.log("India is a good country.. It is my country..");
};

myFun();
// india();

function sundari() {
  console.log("I am Sundari...");
}
let shanu = sundari;
shanu(); // It stores reference of sundari Function..
sundari();

//! Functions with Arguments and Parameters
//? Return Keyword
//todo Inside a function if we are not returning anything and we try to store that then it will return undefined. To return something from function we need to use return keyword along with value. After using return keyword next line will not be executed
// function sumOfTwoNumbers() {
//   let a = 10;
//   let b = 20;
//   console.log(a + b);
// }

function sumOfTwoNumbers(a, b) {
  //   let a = 10;
  //   let b = 20;
  let result = a + b;
  return result;
  console.log(a + b);
  return "East and west shanu is the best..";
}
let returnedValue = sumOfTwoNumbers(1000, 4000);
console.log(returnedValue + "THis value returned by the function");
