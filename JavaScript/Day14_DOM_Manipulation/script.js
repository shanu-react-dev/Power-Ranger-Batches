//! DOM
//? DOM stands for Document Object Model. It is an API provided by Browser. It is used to perform dynamic changes on our UI. It helps to Interact with HTML code.
//? The Document Object Model (DOM) is a programming interface for web documents (HTML) that allows JavaScript to access and manipulate the content, structure, and style of a webpage. It creates Tree like structure for our HTML documents.

//? Tree Structure (Model): The DOM organizes all HTML elements in a hierarchical, tree-like structure. The <html> element is the root node, and other elements branch out from it in parent-child relationships.
//? Objects: Every HTML element, attribute, and piece of text becomes a JavaScript object with properties and methods. The central entry point to this structure is the document object. Each and every node is an object in JavaScript.

//! Document Object
//? The document object represents a web page that is loaded in the browser. By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. The document object can be accessed with a window.document or just document.

//! window Object
//? The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created.

//! Nodes in DOM
//? Node is an object in JS DOM. It can be any specific part of an HTML document such as
//? 1 Root Node (html)
//? 2 Element Node (tag or element)
//? 3 Attribute Node (attribute)
//? 4 Text Node (text or content)
//? 5 Comment Node (comment)

//! Reading the element using DOM Methods
//? document.getElementByID :- This is a JS DOM method generally used to access the elements based on their ID's. It will target the first matching element in our HTML document.
// console.log(document.getElementById("firstHeading"));
let firstHeading = document.getElementById("firstHeading");
console.log(firstHeading);
let myListItems = document.getElementById("myListItems");
console.log(myListItems);
console.dir(myListItems);

//? document.getElementsByClassName :- This is a JS DOM method used to access the elements from HTML document based on their class names. It returns one HTML collection containing only Element Nodes.
let greetings = document.getElementsByClassName("greetings");
console.dir(greetings);

//? document.getELementsByTagName:- THis is a JS DOM method used to target the elements based on their tag names. It returns one HTML collection.
//todo What is the difference between getElementsByclassName and getElementsBytagName.
let ul = document.getElementsByTagName("ul");
console.log(ul);

//? querySelector:- It is a JS DOM method used to select or target the elements based on CSS selector. It accepts CSS selectors as an argument and returns the first matching element.
//? if the specified argument is not present it will return null.
let para = document.querySelector("p");
console.log(para);

para = document.querySelector("#firstPara");
console.log(para);

para = document.querySelector(".first");
console.log(para);

let input = document.querySelector("[type=tel]");
console.log(input);

//? querySelectorAll:- This is a JS DOM method used to target the HTML elements based on CSS selectors only likewise queryselector but it returns one Nodelist containing each and every nodes of an element.
let myPara = document.querySelectorAll("#firstPara");
console.log(myPara);

let arr = Array.from(myPara);
console.log(arr);
arr = Array(myPara);
console.log(arr);
