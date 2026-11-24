function signup() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("pass").value;
    localStorage.setItem("name", a);
    localStorage.setItem("email", b);
    localStorage.setItem("password", c);
    document.getElementById("result").innerHTML = "Sign up successful!";
}