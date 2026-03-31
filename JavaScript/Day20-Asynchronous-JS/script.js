// console.log("Today we gonna learn Timer functions in JavaScript")

// setTimeout(function () {
//     console.log("Hii this is Settimeout function")
// }, 5000)

// console.log("Hii this is line number 6")

// let changeBg = document.querySelector("button")

// changeBg.addEventListener("click", ()=>{
//     setTimeout(() => {
//         document.body.style.background = "lightseagreen"
//     }, 3000);
// })

// let randomNumber = Math.floor(Math.random() * hexCodes.length)
// console.log(randomNumber)
// console.log(hexCodes[randomNumber])

function generateColor() {
  let hexCodes = "1234567890abcdef";
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hexCodes.length);
    randomColor += hexCodes[randomNumber];
  }
  console.log(randomColor)
  return randomColor
}
generateColor()

// setInterval(() => {
//     console.log("Hii this is Shanu")
// }, 2000);

let cbg = document.getElementById("cbg")
console.log(cbg)
let stopBg = document.querySelector(".stopBg")
cbg.addEventListener("click", function () {
    let colorInterval = setInterval(() => {
        document.body.style.background = generateColor()
    }, 2000);
    stopBg.addEventListener("click", () => {
        clearInterval(colorInterval)
        document.body.style.background="#fff"
    })
})