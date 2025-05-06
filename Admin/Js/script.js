const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login-sec");

document.getElementById("button").addEventListener("click", function () {
    event.preventDefault();

    const fail = document.getElementById("fail");
    const success = document.getElementById("success");

    if (username.value === "Admin" && password.value === "Password") {
        success.style.visibility = "visible";
        success.style.opacity = "1";

        setTimeout(() => {
            login.style.opacity = "0";
            login.style.visibility = "hidden";
        }, timeout = 2000);
    }else{
        fail.style.visibility = "visible";
        fail.style.opacity = "1";
    }
});

const close = document.getElementById("done");

document.getElementById("done").addEventListener("click", function () {
    
    fail.style.visibility = "hidden";
    fail.style.opacity = "0";
});