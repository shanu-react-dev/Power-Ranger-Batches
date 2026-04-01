let form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    // console.log(e)
    e.preventDefault()
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
    let contact = document.querySelector("#contact").value
    console.log({username, password, contact})
    localStorage.setItem("userData", JSON.stringify({username, password, contact}))
})