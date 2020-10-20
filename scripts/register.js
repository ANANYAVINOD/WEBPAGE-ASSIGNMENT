var usersJson = [];
document.querySelector("#regBtn").addEventListener("click", function () {
    let name = document.getElementById("username").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("password").value;
    let confirmPass = document.getElementById("cpassword").value;

    clearMsg();
    function validate() {
      if (name.length == 0) {
        msg = "Username field is required";
        id = "error-name";
        errorMsg();
      } else {
        if (name.length <= 2) {
        msg = "Username is invalid.";
        id = "error-name";
        errorMsg();
      } 
    }

    if (mail == ""){
        msg = "Email id is required";
        id ="error-mail";
        errorMsg();
    }

    if (pass.length == 0) {
      msg = "Password is required";
      id = "error-pass";
      errorMsg();
    } else {
      if (pass.length <= 8) {
        msg = "Password requires at least 8 characters";
        id = "error-pass";
        errorMsg();
      } else {
      }
    }

    if (confirmPass.length == 0) {
      msg = "Confirm password is required";
      id = "error-cpass";
      errorMsg();
    } else if (pass != confirmPass) {
      msg = "Does not match with password";
      id = "error-cpass";
      errorMsg();
    } else {
        return true;
      }
  }

  function errorMsg() {
    let error = document.getElementById(id);
    error.textContent = msg;
    error.style.color = "#ff0000";
    error.style.fontSize = "12px";
    error.style.marginBottom = "10px";
    error.style.display = "block";
  }

  function clearMsg() {
    errors = document.querySelectorAll(".error-text");
    for (i = 0; i < errors.length; i++) {
      errors[i].style.display = "none";
    }
  }


  
  function register() {
    var userlist = {
      username: name,
      password: pass,
      email: mail
    };
    usersJson.push(userlist);
    var userDetails = JSON.stringify(usersJson);
    localStorage.setItem("user", userDetails);
    console.log("registered");
  }

  if (validate()) {
    register(); 
    document.getElementById("regForm").style.display = "none"; 
    location.reload();
  }
});
