//Events?
// Event is an action done by the user on the browser. It can be added in various ways such as HTML attributes, DOM Events, addEventListener. There are total 4 types of events such as Window event, Form Event, Mouse Event and Keyboard Event.
function greet () {
    console.log("A very very good afternoon all of you guys!! 😙")
    alert("Your system has been hacked 🤣😂😂")
}

let theme = true

function changeTheme () {
    theme = !theme
    // console.log(theme)
    if(theme){
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }else{
        document.body.style.backgroundColor = "#1a3d45"
        document.body.style.color = "#fff"
    }
}

let change = true

function changeName () {
    change = !change
    if(change){
        document.getElementById("name").innerText = "Shanu Loves BMW M4"
        document.getElementById("change").innerText = "Shanu"
    }else{
        document.getElementById("name").innerText = "Shanu"
        document.getElementById("change").innerText = "shanu loves BMW M4"
    }
}


const box1 = document.querySelector(".box")
console.log(box1)
box1.onclick = (event) => {
    console.log(event)
    console.log("I am a box")
}
