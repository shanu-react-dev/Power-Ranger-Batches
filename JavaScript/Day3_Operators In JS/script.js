// console.log("Hii I am learning Operators in JavaScript");

//! Operators
//? Operators are predefined symbol or special character in JS or any other programming language which is used to perform some specific task based on operands (literals).
//! Arithmetic Operators in JS
// var firstNum = 10;
// var secondNum = undefined;
//? Arithmetic operator addition generally concatenates the number and string datatype but it performs addition if the datatype is numbers, boolean, null or undefined.

//todo Whenever we are performing number datatype + undefined we are getting NaN stands for Not a Number. The datatype of NaN is a number
// var sum = firstNum + secondNum;
// console.log(sum);
// console.log(Number(null));
// console.log(typeof NaN);
// console.log(Number(undefined));

// var sub = firstNum - secondNum;
// console.log(sub);

//! subtraction
//? subtraction is an arithmetic operator which performs subtractions based on operands. if both operands are number then it will return number but if one of them is having string datatype with number value then it will return number. if it is number value along with alphabets it will return NaN.
// var a = 10;
// var b = undefined;
// var res = a - b;
// console.log(res);

//! multiplication
//? multiplication is also an arithmetic operator generally used to perform multiplication on operands and it returns number datatype.
// var a = 5;
// var b = undefined;
// var res = a * b;
// console.log(res);

//! division
//? division is an arithmetic operator which returns number datatype only whenever we are performing false boolean value it will return Infinity
// var a = 33;
// var b = false;
// console.log(typeof Infinity);
// var res = a / b;
// console.log(res);

//! modulus
//?
var a = 3;
var b = false;
var res = a % b;
console.log(res);

//! Exponential
var fNum = 2;
var sNum = 4;
var exp = fNum ** sNum;
console.log(exp);
