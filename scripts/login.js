function login() {
    let uname = document.getElementById("name").value;
    let password = document.getElementById("psw").value;
    var userList = localStorage.getItem("user");
    let allUsers = JSON.parse(userList);
  
    for (i = 0; i < allUsers.length; i++) {
      if (uname == allUsers[i].username && password == allUsers[i].password) {
        console.log("logged in " + allUsers[i].username);
        var currentUser = {
          name: allUsers[i].username
        };
        localStorage.setItem("currentuser", JSON.stringify(currentUser));
        document.getElementById("myForm").style.display = "none";
        return;
      }
    }
    loginerrorMsg();
}
  
  
  function loginerrorMsg() {
    let error = document.getElementById("error-message");
    let name = document.getElementById("name").value;
    let pass = document.getElementById("psw").value;
    if (name == " ") {
      error.innerHTML = "Invalid Username";
    }
    else if (pass == "") {
      error.innerHTML = "Invalid Password";
    } else {
      error.innerHTML = "Incorrect Username or Password";
    }
  }
