if (localStorage.getItem("currentuser")) {
    document.querySelector("#dropbtn").addEventListener("click", function () {
        document.getElementById("loggedInDropdown").classList.toggle("show");  
        document.getElementById("Dropdown").classList.toggle("hide");
    });
    var userName = JSON.parse(localStorage.getItem("currentuser")).name;
    document.getElementById("name-display").innerHTML = "Hi, " + userName;

    document.querySelector("#logout-button").addEventListener("click", function () {
        localStorage.removeItem("currentuser");
        document.getElementById("Dropdown").classList.toggle("show");
        document.getElementById("loggedInDropdown").classList.toggle("hide");
        location.reload();

    });
    
}
else {
    document.querySelector("#dropbtn").addEventListener("click", function () {
        document.getElementById("Dropdown").classList.toggle("show");
        document.getElementById("loggedInDropdown").classList.toggle("hide");
    });

    document.querySelector("#login-button").addEventListener("click", function () {
        location.reload();
    });
   

}
 
    
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openRegForm() {
    document.getElementById("regForm").style.display = "block";
}

function closeRegForm() {
    document.getElementById("regForm").style.display = "none"; 
}



