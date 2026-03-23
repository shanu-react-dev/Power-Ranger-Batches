console.log("Hii this is DOM Manipulation");
let heading = document.querySelector("h1");
console.log(heading);
console.log(heading.innerHTML);
heading.innerHTML = "Hii This is Shanu";
heading.innerText = "Hii this is Chitti RoBo 2.o";
heading.textContent = "Hii  this is Sundari";

let para = document.querySelector("p");
console.log(para);
// console.log(para.innerHTML);
// console.log(para.innerText);
// console.log(para.textContent);
//! innerHTML
//? This is a way to update the content on the UI it shows text data along with tags or elements used inside the targeted element.
//! innerText
//? This is a method to update the targeted element on the UI and it contains only the visible text on the UI.
//! textContent
//? Using this method also we can update the data on the UI and it contains the visible text as well as hidden text for our targeted elements.

// para.innerHTML = `
// Hii This is Amarjeet and He is <mark>the Best person</mark> in <em>this entire world</em>.
// `;

// para.innerText = `
// Hii This is Amarjeet and He is <mark>the Best person</mark> in <em>this entire world</em>.
// `;

para.textContent = `
Hii This is Amarjeet and He is <mark>the Best person</mark> in <em>this entire world</em>.
`;

//! Reading and setting attributes
//! getAttribute
//? This is a method by which we can get the attribute from a targeted elements. If the specified argument does not exist it will return null.
let id = para.getAttribute("id");
console.log(id);
para.id = "MyPara";

//! setAttrribute
//? This is a method by which we can set an attribute to the specified elements.
para.setAttribute("class", "firstPara");

//! get Attribute
let input = document.querySelector("[type=text]");
console.log(input);
let placeholder = input.getAttribute("placeholder");
console.log(placeholder);

input.setAttribute("type", "password");
input.classList.add("Hello");
console.log(input.classList);

input.className = "Hey"; //! It overwrites the class name attribute value
input.classList.add("MyInput"); //! It adds the updated class name along with the previous value