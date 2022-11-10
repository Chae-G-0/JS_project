const loginForm = document.getElementById("loginForm")
const loginInput = loginForm.querySelector("input")
const loginButton = loginForm.querySelector("button")

function onLoginBtnClick(){
    console.log(loginInput.value)
}

loginButton.addEventListener("click", onLoginBtnClick)
