let form = document.querySelector("form");
console.log(form);

window.onload = function () {
    let user = localStorage.getItem("isUser")
    if(user){
        window.location.href = "home.html"
    }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  // console.log(email, password)

  let storedData = JSON.parse(localStorage.getItem("userData"));
  console.log(storedData);

  if (email == storedData.email && password === storedData.password) {
    Toastify({
      text: "Logged in SuccesFully",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b017, #3dc95e)",
      },
    }).showToast();

    setTimeout(() => {
        window.location.href = "./home.html";
    }, 2000);
    localStorage.setItem("isUser", true)
  } else {
    Toastify({
      text: "Invalid Credentials",
      className: "info",
      style: {
        background: "linear-gradient(to right, #e90721bd, #3dc95e)",
      },
    }).showToast();
    console.error("User not found");
  }
});
