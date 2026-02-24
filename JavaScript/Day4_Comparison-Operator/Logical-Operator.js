//! Logical Operator
//? Logical Operator in JavaScript is a special symbol generally used to perform multiple conditions or It can compare two or more expressions. It always returns truthy values or falsy values. There are three Logical Operators AND(&&), OR(||) and NOT(!).
let a = 10;
let b = 20;
//! Falsy Values in JS
//? In JavaScript some values or datatypes are there which always returns false such as empty string (""), null, undefined, 0, false, NaN etc.

//! Logical AND Operator
//? This operator is used to compare two or more expressions or values as well. It returns last truthy value if both expressions return true or both values are truthy value.
let res = a < b && a > b;
console.log(7 && 8);

//! Logical OR Operator
//? This operator is used to cmpare two or more expressions or values as well.It returns truthy values if any expression returns true or any truthy values present. else it will return falsy values if all conditions are false or they are falsy values.
console.log(0 || true);

//! Logical NOT operator
//? This operator is used to make any value false or true. If the value is true it will make it false if the value is false it will make it true.
let isMarried = true;
console.log(isMarried);
console.log(!isMarried);
