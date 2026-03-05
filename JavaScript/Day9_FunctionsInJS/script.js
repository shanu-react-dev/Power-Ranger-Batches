// console.log("Hii Shanu will learn Function now.... with his teammates...");

// greet();
//! Function is a set of block of reusable codes which is used to perform some specific task. It is a non-primitive datatype in JavaScript. Once after declaring a function we can use it anywhere in the script file.

//? We can create a function using function keyword followed by function name followed by parameter block followed by block of reusable codes.

//todo In JS We have several functions
//! 1. Named Function
//? A  function having name is known as named function. it is also known as Function definition or function declaration. It follows Function hoisting.

//! Function Hoisting
//? Function hoisting in JavaScript is a behavior where function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed.
// function greet() {
//   console.log("Hii This is Named Function in JS");
// }
// greet();

//! 2. Anonymous Function
//? A function declared without any name is known as Anonymous function. It can be used inside another function or as an argument etc. It can't be called directly. It will throw the error as follows
//todo Uncaught SyntaxError: Function statements require a function name
// function () {
//     console.log("Hii This is Shanu..")
// }

//! 3. Function Expression
//? A function which is stored inside a variable after declaration is known as Function Expression. We can call this kind of function by there variable name.

//todo if we are declaring a named function along with variable it will be called by the variable name only.
// let storedFunction = function () {
//   console.log("Here is function expression..");
// };
// storedFunction();

// let myFun = function india() {
//   console.log("India is a good country.. It is my country..");
// };

// myFun();
// // india();

// function sundari() {
//   console.log("I am Sundari...");
// }
// let shanu = sundari;
// shanu(); // It stores reference of sundari Function..
// sundari();

//! Functions with Arguments and Parameters
//? Return Keyword
//todo Inside a function if we are not returning anything and we try to store that then it will return undefined. To return something from function we need to use return keyword along with value. After using return keyword next line will not be executed
// function sumOfTwoNumbers() {
//   let a = 10;
//   let b = 20;
//   console.log(a + b);
// }

// function sumOfTwoNumbers(a, b) {
//   //   let a = 10;
//   //   let b = 20;
//   let result = a + b;
//   return result;
//   console.log(a + b);
//   return "East and west shanu is the best..";
// }
// let returnedValue = sumOfTwoNumbers(1000, 4000);
// console.log(returnedValue + "THis value returned by the function");

//! Arguments Object in JS
//? Arguments Object in JavaScript is a way to access all the arguments without using any parameter. it stores all the arguments in the form of array. we can use loops to iterate this array. Inside the Arguments object we have one callee function which represents the function which has been called.

//! Argument
//? It is a value or variable which is having some value which can be passed to the functions while calling it. We can send n number of arguments.

//! Parameter
//? Parameter is a block which stores arguments in it. It is a kind of variable to store the arguments. It follows Identifier rules
// function sumOfArguments(a, b, c) {
//   let res = a + b + c;
//   console.log(res);
//   let args = arguments;
//   console.log(args);
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     console.log(args[i]);
//     sum = sum + args[i];
//   }
//   console.log(sum);
// }

// sumOfArguments(1, 2, 4, 5, 6, 7, 8, 8, 9);

//! IIFE (Immediately Invoked Function Expression)
//? IIFE stands for Immediately Invoked Function Expression. It is a fucntion which is called as soon as it has been declared. Before using IIFE function the previous line must and should be terminated.
// (function () {
//   console.log("Hii This is IIFE function..");
// })();
// (function () {
//   console.log("Hii This is IIFE function..");
// })();

// (function IIFE() {
//   console.log("IIFe with named function");
// })();

// IIFE(); //!❌❌ It is not possible Uncaught syntax error

//! Arrow Function
//? Arrow Function is a shrthand function. It is used to create a function without using function keyword. It was introduced in ES6 Version. It does implicit return as well as explicit return.

// let arrowFun = () => console.log("Shanu");
// arrowFun();

//! Explicit return
// let demo = () => {
//   let num1 = 19;
//   let num2 = 20;
//   let res = num1 + num2;
//   return res;
// };

// console.log(demo());

// let MyFun = () => 19 + 45; //! Implicit return
// console.log(MyFun());

//! Prog. Questions
//? Reverse a Number (Without String Methods)
let a = 123456;
let rev = 0;

// while(a>0){
//   let ld=a%10;
//   rev=rev*10+ld;
//   a=Math.floor(a/10)
// }
// console.log(rev)
// function ReverseNum(a) {
//   for (; a > 0; a = Math.floor(a / 10)) {
//     let ld = a % 10;
//     rev = rev * 10 + ld;
//   }
//   console.log(rev);
// }
// ReverseNum(12345);

//? Find Largest Using arguments Object
// function myNumbers() {
//   console.log(arguments);
//   let largestNum = arguments[0];
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > largestNum) {
//       largestNum = arguments[i];
//     }
//   }
//   console.log(largestNum);
// }
// myNumbers(1, 2, 3, 4, 5, 6, 6, 7, 7, 9);

//? Count Vowels in a String
// function vowelCount(input) {
//   let vCount = 0;
//   for (let i = 0; i < input.length; i++) {
//     console.log(i);
//     if (
//       input[i] === "a" ||
//       input[i] === "e" ||
//       input[i] === "i" ||
//       input[i] === "o" ||
//       input[i] === "u"
//     ) {
//       vCount += 1;
//     }
//   }
//   //! String Interpolation
//   //? It is a way to access a variable inside a string statement.
//   console.log(`Here in the provided string we have ${vCount} vowels`);
// }

// vowelCount("amarjeet");

//? Create a function that runs only once
// (function (a) {
//   console.log(`Hii My friend name is ${a}`);
// })("Shanu");

//? Check Palindrome
function isPalindrome(input) {
  let revString = "";
  for (let i = input.length - 1; i >= 0; i--) {
    console.log(input[i]);
    revString += input[i];
  }
  if (revString == input) {
    console.log(
      `Provided Input ${input} and reversed input ${revString} both are same that's why it is palindrome`,
    );
  } else {
    console.log("It is not palindrome");
  }
}

isPalindrome("malayalam");
