//! Array
//? Array is a non-primitive data types. It can store multiple values inside a single variable. It is reference based. or It is a collection of Multiple elements having positive index as an address for each and every element.

//todo task
//? difference between array literals, Array constructor and new Array
//? What is prototypes and proto

//? Array can be classified in two ways Homogeneous and heterogeneous. Homogeneous array can store same kind of data inside it, Heterogeneous array having multiple datatypes inside it.
//?Homogeneous:- Same Datatypes
// let arr = ["JavaScript", "Mocha", "LiveScript", "EcmaScript"];
// console.log(arr);
//? Heterogeneous: Different Datatypes
// let arr2 = ["JavaScript", 1995, true, null, undefined];
// console.log(arr2);

//! Different way to write Array in JS
// let arr3 = Array("Hii", "Hello", "Bye", "Bello");
// console.log(arr3);

// let arr4 = new Array(1, 2, 3, 4, 5);
// console.log(arr4);

//! length and index
//? length is a number of elements present inside an array.
//? index it is an address or position of the array elements. It starts from 0 upto array elements.
// let arrOfFruits = [
//   "Orange",
//   "Grapes",
//   "PineApple",
//   "Apple",
//   "Guava",
//   "JackFruit",
//   "Papaya",
// ];

// console.log(arrOfFruits[3]);
// for (let i = 0; i < arrOfFruits.length; i++) {
//   console.log(arrOfFruits[i]);
// }

//! length
//? length is a property in JS for array which is used to find the length of an array.
// console.log(arrOfFruits.length);

//! at
//? at is an array method and it accepts only one argument as an index and returns the element present at the specified index. If the specified index is not present it will return undefined.
// console.log(arrOfFruits.at(true)); //grapes
// console.log(arrOfFruits.at(false)); //orange
// console.log(arrOfFruits.at(undefined)); //orange
// console.log(arrOfFruits.at(null)); //orange
// console.log(arrOfFruits.at("")); // orange
// console.log(arrOfFruits.at(10)); //undefined
// console.log(arrOfFruits.at(1)); //grapes
// console.log(arrOfFruits.at(-2)); //jackfruit

//! concat
//? concat is an array method which concatenates the passed arguments inside an exisiting array and it returns one new array without modifying the existing one. It can accept any number of Arguments.
// let concatenatedArr = arrOfFruits.concat("Shanu");
// console.log(concatenatedArr);
// concatenatedArr = arrOfFruits.concat([
//   "Pear",
//   "GooseBerry",
//   "BlackBerry",
//   "StrawBerry",
//   "Berry Berry",
//   "BurBerry",
// ]);
// console.log(concatenatedArr);

// concatenatedArr = arrOfFruits.concat(
//   ["BMW M4", "HellCat RedEye", "Dodge Viper"],
//   null,
// );
// console.log(concatenatedArr);
// console.log(arrOfFruits);

// let arrOfCountries = [
//   "India",
//   "Iran",
//   "Israel",
//   "USA",
//   "Russia",
//   "Abu Dhabi",
//   ["SriLanka", "Australia", "West Indies", "England", "New Zealand"],
// ];
// console.log(arrOfCountries);

//todo copywithin, every, fill, filter, find, findIndex, findLast, findLastIndex,

//! flat
//? flat is an array method which is used to remove the depth of the array items and collect all items in a single array. It also does not modify the original array. By default it will be make the array flatten for the first nested array if we want to flat all nested array we can pass argument number of levels inside the array or we can pass Infinity as an argument.
// let flattenedArr = arrOfCountries.flat();
// console.log(flattenedArr);
// console.log(arrOfCountries);
// let digitArr = [1, 2, [3, 4, [5, 6]]];
// let flattenedDigitArr = digitArr.flat();
// console.log(flattenedDigitArr);
// flattenedDigitArr = digitArr.flat(2);
// console.log(flattenedDigitArr);
// flattenedDigitArr = digitArr.flat(Infinity);
// console.log(flattenedDigitArr);

//todo flatMap and forEach
//! includes
//? in Array includes method is used to check whether the specified argument is present or not inside an array. If it is present it will return true else false. It can accept two arguments first elements need to find second is index which specifies from which position we need to find. This also does not modify the original array.
// let arrOfUsers = ["Shanu", "Rohit", "Rohan", "Sundari"];
// let includes = arrOfUsers.includes("Sundari");
// console.log(includes);
// includes = arrOfUsers.includes("Rohit", 1);
// console.log(includes);

//! indexOf
//? indexOf is an array method generally used to find the index of the specified element from an array. if the specified argument is not present inside the array it will return me -1.
// console.log(arrOfUsers.indexOf("Sundari"));
// console.log(arrOfUsers.indexOf(10));

//! join
//? join is an array method which is used to convert the array into string datatype. It accepts one argument as a separator.
// console.log(arrOfUsers.join(" "));
// console.log(arrOfUsers.join(""));
// console.log(arrOfUsers.join());

// todo keys
//! lastIndexOf
//? lastIndexOf is an array method generally used to find the index of last matching element inside an array. If the specified argument is not present it will return -1. It can accept two arguments first is element needs to find second is index from where we need to search.
// let lastIndex = arrOfUsers.lastIndexOf("Sundari");
// console.log(lastIndex);

// let ages = [20, 40, 20, 30, 19, 21, 30];
// console.log(ages.lastIndexOf(29));

//!pop
//? pop is an array method it does not accept any argument. It is used to remove the last element from an array. It returns removed element. If the array is empty it will return undefined.
// console.log(ages);
// let poppedArr = ages.pop();
// console.log(poppedArr);
// console.log(ages);

//! push
//? push is an array method generally used to add elements at the last index. It can accept multiple arguments. It returns the updated length of an array.
// console.log(ages);
// let pushedArr = ages.push("Shanu");
// console.log(pushedArr);
// pushedArr = ages.push("Sheila", "Shakeela", "Mala", "Leela");
// console.log(ages);

//todo reduce and reduceRight
//! reverse
//? reverse is an array method which is used to reverse the elements inside an array. It does not accept any argument.
let arr = ["Shanu", "Sundari", "Tinku", "Rinki", "Mala", "Rinku"];
let reveresedArr = arr.reverse();
console.log(reveresedArr);
console.log(arr);

//! Create a function to check whether the passed argument is palindrome or not
function checkPalindrome(word) {
  // console.log(word);
  // let arrWord = word.split("");
  // console.log(arrWord);
  // let reversedArr = arrWord.reverse();
  // console.log(reversedArr);
  // let reversedWord = reversedArr.join("");
  // console.log(reversedWord);
  // if (word == reversedWord) {
  //   console.log("Specified word is palindrome!!");
  // } else {
  //   console.log("Specified word is not palindrome..");
  // }
  let reversedWord = word.split("").reverse().join("");
  console.log(word == reversedWord ? "Palindrome" : "Not palindrome");
}
checkPalindrome("racecar");

//! shift
//? shift is an array method which removes the first element from an array. It does not accept any argument. It returns the removed element.
let myArr = [
  "America",
  "Bhutan",
  "China",
  "Denmark",
  "England",
  "France",
  "Germany",
  "Holland",
  "India",
  "Japan",
  "Korea",
  "London",
  "Mongolia",
  "New Zealand",
  "Oman",
  "Palestine",
  "Qatar",
  "Russia",
  "Scottland",
  "Thailand",
  "Ukraine",
  "Vietnam",
  "Wales",
  "Yugoslavia",
  "Zimbabwe",
];
// console.log(myArr.length);
// console.log(myArr);
// let shiftedEle = myArr.shift();
// console.log(shiftedEle);
// console.log(myArr);

//! unshift
//? unshift is an array method generally used to add elements at the starting index of an array. It can accept multiple arguments. If there is no argument passed it will return the default array length. or It will return updated array length.
let unshiftedArr = myArr.unshift("Argentina", "Belgium");
console.log(unshiftedArr);
console.log(myArr);

//! sort
//? sort is an array method which is used to sort an array based on 
let cities = ["Chrompet", "Delhi", "Patna", "Mumbai", "Pune", "Kanyakumari"];
let sortedArr = cities.sort();
console.log(sortedArr);

let ages = [12, 9, 18, 14, 20];
let sortedAge = ages.sort(function (a, b) {
  return b - a;
});
console.log(sortedAge);

let descArr = [];
for (let i = 0; i < ages.length; i++) {
  let greater = ages[0];
  if (greater < ages[i]) {
    greater = ages[i];
  } else {
    descArr.push(ages[i]);
  }
}

console.log(descArr);
