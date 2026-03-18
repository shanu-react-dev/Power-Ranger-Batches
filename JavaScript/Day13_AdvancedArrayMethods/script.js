//! Map
//? in JavaScript Map Array method is used to iterate and modify each and every element of an array and it returns the modified element in a new array without modifying the length of an array.
// let arr = [1, 2, 3, 4, 5];
// let returnedArr = arr.map(function callBack(ele, index, third) {
//   //   console.log(ele);
//   //   console.log(index);
//   //   console.log(third);
//   return ele ** 2;
// });
// console.log(returnedArr);

// let returnedArr = arr.map((ele, index) => {
//   if (ele % 2 != 0) {
//     return ele;
//   }
// });
// console.log(returnedArr);
//! Filter
//? filter array method is used to return filtered data inside a new array from an existing array. It accepts one callback function as an argument where we have 3 parameters (element, index, array itself).
// let returnedArr = arr.filter((ele, index, myarr) => {
//   //   console.log(ele);
//   if (ele % 2 != 0) {
//     return ele;
//   }
// });
// console.log(returnedArr);
//! ForEach
//? forEach is an advanced array method accepts one callback function as an argument and it returns undefined. It is used to loop through the array elements.
// let arrOfCars = ["BMW M4", "HellCat", "Supra", "Koenigsegg", "Ferrari"];
// let forEach = arrOfCars.forEach((ele, index, arr) => {
//   // console.log(ele);
//   // console.log(index);
//   // console.log(arr);
//   // console.log(other);
//   return "shanu";
// });
// console.log(forEach);
//! Reduce
//? reduce is an advance array method which is used to reduce the element of an array into a single value. It accepts callback function and initial value as an argument where we  have four parameters accumulator which will hold the previous value and next currval where we will be having current value of an array then index and arr.
// let arr = [1, 2, 3, 4, 5];
// let sumOfEle = arr.reduce((accumulator, currVal, index, myarr) => {
//   // console.log(accumulator);
//   // console.log(currVal);
//   // console.log(index);
//   // console.log(myarr);
//   return accumulator * currVal;
// });

// console.log(sumOfEle);

// let arr2 = [];
// let emptyArr = arr2.reduce((accumulator, currVal, index, myarr) => {
//   return accumulator + currVal;
// }, 0);
// console.log(emptyArr);

//! for in and for of
//? for of is an advanced looping method which is used to perform the iteration for iterables. such as string and array. It can't iterate objects.
let arr = ["grapes", "orange", "cashew", "Mango", "tomato", "lemon"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i of arr) {
//   console.log(i);
// }

let myName = "Kalees";
// for (let i of myName) {
//   console.log(i);
// }

//! for in
//? for in loop is used to iterate the objects primarily it can iterate any iterablse as well.
let userDetails = {
  userName: "Sundari",
  email: "sundari@gmail.com",
  gender: "Rather not to say",
  contact: 1234567890,
};

// console.log(userDetails.userName);
// console.log(userDetails.email);
// for (let i = 0; i < userDetails.length; i++) {
//   console.log(userDetails.i);
// }

for (let i in userDetails) {
  console.log(i, userDetails[i]);
}

for (let i in myName) {
  console.log(myName[i]);
}

for (let i in arr) {
  console.log(arr[i]);
}

// let userName = "Susmitha";
// userName.forEach((ele, index) => console.log(ele));

// let arrOfCars = ["Subaru", "Carrera GT", "Porsche 911", "Audi R8", "VS 6"];
// let output = arrOfCars.reduce((acc, currval) => acc - currval);
// console.log(output);

let arr1 = [1, 2, 3, [4, 5, 6, 7]];

let updatedArr = [];
for (let i = 0; i < arr1.length; i++) {
  let myArr;
  if (typeof arr1[i] == "object") {
    myArr = arr1[i];
    for (let j = 0; j < myArr.length; j++) {
      updatedArr.push(myArr[j]);
    }
  } else {
    updatedArr.push(arr1[i]);
  }
}
console.log(updatedArr);

let newArr = [];
for (const ele of arr1) {
  let myarr;
  if (typeof ele == "object") {
    myarr = ele;
    myarr.forEach((ele, index) => newArr.push(ele));
  } else {
    newArr.push(ele);
  }
}

console.log(newArr);
