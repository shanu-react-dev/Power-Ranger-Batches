//! Unary Operator
//? An Operator which is performed only on one operand is known as unary operator. It includes five operators
//todo typeof:- It tells the data type of any variable what kind of data is present inside a variable
//todo preIncrement:- This operator increases the value by 1. It is updating the value first and then it is used.
//todo postIncrement:- This operator also increases the value by 1. It is assigned first then it will be updated.
//todo preDecrement:- This operator decreases the value by 1. It is updating the value first and then it is used.
//todo postDecrement:- This operator also decreases the value by 1. It is assigned first then it will be updated.
// let a = "10";
// console.log(a++);
// console.log(++a);

// let expr = a++ + ++a;
// console.log(expr);

// let a = 7;
// let b = 8;

// let expr = ++(a>b && 10) +4
// console.log(expr)

//! Invalid left-hand side expression in prefix operation. In JavaScript we can't perform Increment and decrement operator directly on null and boolean values.
let shanu = ++null;
console.log(shanu);
