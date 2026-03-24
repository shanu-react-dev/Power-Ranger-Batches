console.log("Element creation using DOM methods..");
//! createElement
//? THis is a JS DOM method helps us to create elements in JavaScript. By using this method we can create any elements in JavaScript.
let myFirstPara = document.createElement("p");
console.log(myFirstPara);
let mySecPara = document.createElement("p");
console.log(mySecPara);
let myThirdPara = document.createElement("p");
console.log(myThirdPara);

//! innerHTML
//? Using this method we can add any content along with specified tags inside our created element or exisiting element. Here the tags written inside this has meaningful sense.
myFirstPara.innerHTML =
  "Hii this is Shanu and he is a great warrior of Mars Planet. But <strong>Mars Planet</strong> is too Hot so SHanu became super Hot";

//! innerText
//? This method helps us to add plain text inside our created elements or exisiting elements. Here each and everything considered as a plain text only
mySecPara.innerText =
  "Hey Buddy this is Shanu and he is an <b>astronaut</b> he went to other galaxy and found multiple aliens now Aliens kidnapped Shanu and he is struggling..";

//! textContent
//? This method helps us to add plain text inside our created elements or exisiting elements. Here each and everything considered as a plain text only.
myThirdPara.textContent =
  "Hey Guys Wassup how are you doin. This is Shanu from Dhurandhar Revenge now He is an army officer and he will die for his nation and his wife will receive <span style=display:none;>Paramveer Chakra..</span>";

// let myHeading = document.querySelector("h1");
// console.log(myHeading);
// console.log(myHeading.innerHTML);
// console.log(myHeading.innerText);
// console.log(myHeading.textContent);

//! Attaching created elements inside the UI
//! appendChild
//? appendChild is a method in JavaScript and it is used to add an element inside our DOM at last as a child element. By using this method we can add only one element inside our DOM.
// document.body.appendChild(myFirstPara);
// document.body.appendChild(mySecPara);
// document.body.appendChild(myThirdPara);

document.body.appendChild(myFirstPara, mySecPara, myThirdPara);
//! append
//? append is a method in JavaScript it is used to add multiple elements at a time inside our DOM
document.body.append(myFirstPara, mySecPara, myThirdPara);

//! Styling elements using JavaScript
myFirstPara.style.color = "#6789";
mySecPara.style.backgroundColor = "#4567";
myThirdPara.style.width = "400px";
myThirdPara.style.border = "2px solid red";

//! Attribute creation
let myClassAttribute = document.createAttribute("title");
console.log(myClassAttribute);
let myPoem = document.createElement("pre");
console.log(myPoem);
myPoem.setAttribute("class", "poem");
myPoem.innerText = `
Twinkle twinkle little star
How I wonder what you are
Up above world so high
Like a shanu in the sky
`;

document.body.append(myPoem);

myPoem.style.fontSize = "20px";
myPoem.style.textAlign = "center";
myPoem.style.color = "#7c5f5c";
