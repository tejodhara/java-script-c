let loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let userForm = document.forms["userform"];
  // console.log("userForm",userForm); 
  let usernameElement = userForm.username;
  let passwordElement = userForm.password;
//   console.log("usernameElement",usernameElement);
  let isValidUsername = validateUsername(usernameElement.value);
  let isValidpassword = validatepassword(passwordElement.value);

  if (isValidpassword && isValidUsername) {
    alert("valid form");
  }
});

function validateUsername(username) {
  if (username) {
    if (username.search(/[^a-zA-Z]+/) === -1) {
      document.getElementById("emptyUsername").style.display = "none";
      document.getElementById("invalidUsername").style.display = "none";
      return true;
    } else {
      document.getElementById("emptyUsername").style.display = "none";
      document.getElementById("invalidUsername").style.display = "block";
    }
  } else {
    document.getElementById("emptyUsername").style.display = "block";
    document.getElementById("invalidUsername").style.display = "none";
    return false
  }
}

function validatepassword(password) {
  if (password) {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) {
      document.getElementById("emptyPassword").style.display = "none";
      document.getElementById("invalidPassword").style.display = "none";
      return true;
    } else {
      document.getElementById("emptyPassword").style.display = "none";
      document.getElementById("invalidPassword").style.display = "block";
    }
  } else {
    document.getElementById("emptyPassword").style.display = "block";
    document.getElementById("invalidPassword").style.display = "none";
    return false
  }
}
