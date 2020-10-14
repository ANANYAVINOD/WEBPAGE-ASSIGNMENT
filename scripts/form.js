function firstNameValidate() {
    const fname = document.getElementById('fname').value;
    const fnameError = document.getElementById('fname-error');
    if(fname == "") {
        fnameError.innerHTML = "*Please fill the first name field";
        return false;
    }
    else if(fname.length <= 2) {
        fnameError.innerHTML = "*Please enter a valid name";
        return false;
    }
    else if(fname.length >= 10) {
        fnameError.innerHTML = "*First name shouldn't exceed 10 characters";
        return false; 
    }
    else {
        fnameError.innerHTML = "";
    }    
    return fname.value;  
}

function lastNameValidate() {
    const lname = document.getElementById('lname').value;
    const lnameError = document.getElementById('lname-error');
    if(lname == "") {
        lnameError.innerHTML = "*Please fill the last name field";
        return false;
    }
    else if(lname.length >= 15) {
        lnameError.innerHTML = "*Last name shouldn't exceed 15 characters";
        return false; 
    }
    else {
        lnameError.innerHTML = "";
    }    
    return lname.value; 
}

function numValidate() {
    const num = document.getElementById('num').value;
    const numError = document.getElementById('num-error');
    const phoneNoFormat = /^[1-9][0-9]{9}$/;
    if (num.value.match(phoneNoFormat)) {
        numError.innerHTML = '';
        return num.value;
    } else {
        numError.innerHTML = "*Please enter a valid phone number";
        return false;
    }
}

function emailValidate() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const mailFormat = /^[a-zA-Z0-9.]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
    if (email.value.match(mailFormat)) {
        emailError.innerHTML = '';
        return email.value;
    } else {
        emailError.innerHTML = "*Please enter a valid email id";
        return false;
    }    
}
