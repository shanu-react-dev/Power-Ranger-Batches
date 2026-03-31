console.log("Hii this is one form")

let form = document.querySelector("form")
console.log(form)

let usernameInput = document.getElementById("username")
let passwordInput = document.getElementById("password")

let pError = document.querySelector(".pError")
form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(e)
    // console.log(username.value)
    // console.log(password)

    username = usernameInput.value
    password = passwordInput.value

    if(password.length < 8){
        pError.innerHTML = `Password Must contain at least 8 characters`
        return
    }
    console.log({username, password})

    usernameInput.value = ""
    passwordInput.value = ""
})

let showHide = document.querySelector('.show')
console.log(showHide)

showHide.addEventListener("click", ()=>{
    if(passwordInput.type === "password"){
        passwordInput.type = "text"
    showHide.innerText = "hide"
    }else{
        passwordInput.type = "password"
        showHide.innerText = "show"
    }
})
