document.querySelector("#contact-button").addEventListener("click", function (event) {
    event.preventDefault();
    const name1 = firstNameValidate();
    const name2 = lastNameValidate();
    const phoneNo = numValidate();
    const emailid = emailValidate();
    const subj = subjectValidate();
    const dOB = dobValidate();
    if (name1 && name2 && phoneNo && emailid && subj && dOB) {
    let reqObj;
       reqObj = {name1, name2, phoneNo, emailid, subj, dOB};
       console.log(reqObj);
    }
});
 

function firstNameValidate() {
    const firstname = document.getElementById('fname').value;
    const fnameError = document.getElementById('fname-error');
    if(firstname == "") {
        fnameError.innerHTML = "*Please fill the first name field";
        return false;
    }
    else if(firstname.length <= 2) {
        fnameError.innerHTML = "*Please enter a valid name";
        return false;
    }
    else if(firstname.length >= 10) {
        fnameError.innerHTML = "*First name shouldn't exceed 10 characters"; 
        return false;
    }
    else {
        fnameError.innerHTML = "";
    }    
    return firstname;  
}

function lastNameValidate() {
    const lastname = document.getElementById('lname').value;
    const lnameError = document.getElementById('lname-error');
    if(lastname == "") {
        lnameError.innerHTML = "*Please fill the last name field";
        return false;
    }
    else if(lastname.length >= 15) {
        lnameError.innerHTML = "*Last name shouldn't exceed 15 characters";
        return false; 
    }
    else {
        lnameError.innerHTML = "";
    }    
    return lastname; 
}

function numValidate() {
    const number = document.getElementById('num').value;
    const numError = document.getElementById('num-error');
    const phoneNoFormat = /^[1-9][0-9]{9}$/;
    if (number.match(phoneNoFormat)) {
        numError.innerHTML = " ";
        return number;
    } else {
        numError.innerHTML = "*Please enter a valid phone number";
        return false;
    }
}

function emailValidate() {
    const email = document.getElementById('mail').value;
    const emailError = document.getElementById('mail-error');
    //const mailFormat = /^[a-zA-Z0-9.]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
    if (email == "") { 
        emailError.innerHTML = " *Please enter a valid email id";
        return false;
    } else {
        emailError.innerHTML = " ";
        return email;
    }    
}

function subjectValidate() {
    const sub = document.getElementById('subject').value;
    const subError = document.getElementById('subject-error');
    if (sub == "") {
        subError.innerHTML = "*Please enter the subject";
        return false;
    }
    else {
        subError.innerHTML = "";
        return sub;
    }
}

function dobValidate() {
    const dateOfBirth = document.getElementById('DoB').value;
    const dobError = document.getElementById('dob-error');
    if (dateOfBirth == "") {
        dobError.innerHTML = "*Please enter the date of birth";
    } else {
        const DOB = new Date(dateOfBirth);
        const today = new Date();
        if (DOB > today) {
            dobError.innerHTML = "*You cannot enter a date in the future";
        }
        else if ((today - DOB) > 18) {
            dobError.innerHTML = "*Age should be greater than 18"
        }
    }
    return dateOfBirth;  
}
