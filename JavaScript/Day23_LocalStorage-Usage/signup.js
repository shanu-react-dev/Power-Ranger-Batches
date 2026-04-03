let form = document.querySelector("form");

window.onload = function () {
    let user = localStorage.getItem("isUser")
    if(user){
        window.location.href = "home.html"
    }
}

form.addEventListener("submit", function (e) {
  // console.log(e)
  e.preventDefault();
  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let contact = document.querySelector("#contact").value;
  console.log({ username, email, password, contact });
  localStorage.setItem(
    "userData",
    JSON.stringify({ username, email, password, contact }),
  );
  window.location.href = "./login.html";
});
