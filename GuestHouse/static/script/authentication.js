//For login page validation
function loginvalidationFun() {
    //Get the data
    const sic_number = document.getElementById("sic_number").value;
    const password = document.getElementById("password").value;

    //Call the functions
    if (!sicValidation(sic_number) | !passwordValidation(password)) {
        return false;
    }
}

//For Registration page validation
function registrationvalidationFun() {
    //Get the data
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const sic_number = document.getElementById("sic_number").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const terms_cond = document.getElementById("terms_cond");

    //Call the functions
    if (!firstNameValidation(first_name) | !lastNameValidation(last_name) | !sicValidation(sic_number) | !emailValidation(email) | !passwordValidation(password) | !confirmpasswordValidation(password, confirm_password) | !terms_cond_Validation(terms_cond)) {
        return false;
    }
}

//Validation of First Name
function firstNameValidation(first_name) {
    if (first_name === "") {
        document.getElementById("first_name_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("first_name_error").innerHTML = "";
        return true;
    }
}

//Validation of Last Name
function lastNameValidation(last_name) {
    if (last_name === "") {
        document.getElementById("last_name_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("last_name_error").innerHTML = "";
        return true;
    }
}

//Validation of SIC Number
function sicValidation(sic_number) {
    if (sic_number === "") {
        document.getElementById("sic_number_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("sic_number_error").innerHTML = "";
        return true;
    }
}

//Validation of Email
function emailValidation(email) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") {
        document.getElementById("email_error").innerHTML = "Field can't be empty";
        return false;
    } else if (!email.match(mailFormat)) {
        document.getElementById("email_error").innerHTML = "Please enter correct email address";
        return false;
    } else {
        document.getElementById("email_error").innerHTML = "";
        return true;
    }
}

//Validation of Password
function passwordValidation(password) {
    if (password === "") {
        document.getElementById("password_error").innerHTML = "Password can't be empty ";
        return false;
    } else if (password.length <= 8) {
        document.getElementById("password_error").innerHTML = "Password is too short";
        return false;
    } else if (!password.match(/[a-z]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a lowercase letter";
        return false;
    } else if (!password.match(/[A-Z]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a uppercase letter";
        return false;
    } else if (!password.match(/[0-9]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a number";
        return false;
    } else if (!password.match(/[@,#,$,%]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a special letter";
        return false;
    } else {
        document.getElementById("password_error").innerHTML = "";
        return true;
    }
}

//Validation of Confirm Password
function confirmpasswordValidation(password, confirm_password) {
    //Validation for password
    if (confirm_password === "") {
        document.getElementById("confirm_password_error").innerHTML = "Field can't be empty";
        return false;
    }
    else if (confirm_password != password) {
        document.getElementById("confirm_password_error").innerHTML = "Both Password doesn't match";
        return false;
    } else {
        document.getElementById("confirm_password_error").innerHTML = "";
        return true;
    }
}

function terms_cond_Validation(terms_cond) {
    if (!terms_cond.checked) {
        document.getElementById("reg_terms_error").innerHTML = "Please check this field";
        return false;
    } else {
        document.getElementById("reg_terms_error").innerHTML = "";
        return true;
    }
}