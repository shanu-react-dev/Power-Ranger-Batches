console.log("Hii this is Login page from DOM")
let mainBox = document.createElement("main")
let loginHeading = document.createElement("h1")
let form = document.createElement("form")
let username = document.createElement("input")
let password = document.createElement("input")
let loginBtn = document.createElement('input')

console.log(mainBox)
//! Adding content and attributes for the created elements
loginHeading.innerText = "Login Here"
username.setAttribute("type", "text")
username.setAttribute("placeholder", "Enter Username")
username.setAttribute("id", "username")
username.setAttribute("name", "username")
username.setAttribute("required", "")

password.setAttribute("type", "password")
password.setAttribute("placeholder", "Enter Password")
password.setAttribute("id", "password")
password.setAttribute("name", "password")
password.setAttribute("required", "")

loginBtn.value="Login Here"
loginBtn.type = "submit"

//Appending inputs inside form tag
form.append(username, password, loginBtn)
mainBox.append(loginHeading, form)
document.body.appendChild(mainBox)

//Styling our login form
document.body.style.height = "100vh"
document.body.style.width = "100%"
document.body.style.display = "flex"
document.body.style.alignItems = "center"
document.body.style.justifyContent = "center"

mainBox.style.height = "400px"
mainBox.style.width = "350px"
mainBox.style.backgroundColor = "#74cdd1"
mainBox.style.display= "flex"
mainBox.style.alignItems= "center"
mainBox.style.justifyContent= "center"
mainBox.style.flexDirection= "column"
mainBox.style.gap = "30px"

form.style.height="60%"
form.style.width="90%"
// form.style.backgroundColor="lightsalmon"

let inputArr = Array.from(form.children)
console.log(inputArr)
inputArr.forEach((ele,index)=>{
    // console.log(ele)
    ele.style.marginTop = "10px"
    ele.style.border = "2px solid #bfdee098"
    ele.style.borderRadius = "7px"
})

username.style.width = "100%"
username.style.padding = "10px"
// username.style.margin = "10px"
password.style.width = "100%"
password.style.width = "100%"
password.style.padding = "10px"
loginBtn.style.width = "100%"
loginBtn.style.width = "100%"
loginBtn.style.padding = "10px"
