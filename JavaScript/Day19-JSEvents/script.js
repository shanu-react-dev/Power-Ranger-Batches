console.log("Hii this is Shanu");
let button = document.querySelector("button");
console.log(button);

//? addEventListener is a method generally used to add an event on any element it accepts two arguments first is event name and another is event handler function which will be triggered when the specified event will triggered.
button.addEventListener("click", function () {
  console.log("Hii this is one function executed after clicking the button");
});

let box = document.querySelector(".box");
console.log(box);

box.addEventListener("mouseover", function () {
  console.log("Someone is trying to open the box");
});
