localStorage.setItem("email","abc@gmail.com")
document.write(localStorage.getItem("email"))


// on logout local memory will be earased
function logout(){
    localStorage.clear();
}

sessionStorage.setItem("email","abc@gmail.com")
document.write(sessionStorage.getItem("email"))


// on logout local memory will be earased
function logout(){
    sessionStorage.clear();
}