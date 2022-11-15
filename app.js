const loginForm = document.getElementById("loginForm");
const loginInput = document.querySelector("#loginFrom input");

function onLoginSubmit(event) {
  event.preventDefault();
//   const userName = loginInput.value;
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
