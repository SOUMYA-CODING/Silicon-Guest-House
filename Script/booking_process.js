//Get the value from 
let check_in_data = localStorage.getItem("check_in_data");
let check_out_data = localStorage.getItem("check_out_data");
let adult_data = localStorage.getItem("adult_data");
let children_data = localStorage.getItem("children_data");

//Remove the data from local storage
window.localStorage.clear();

//set the date to Labels
document.getElementById("Check_in").value = check_in_data;
document.getElementById("Check_out").value = check_out_data;
document.getElementById("Adults").value = adult_data;
document.getElementById("Childrens").value = children_data;


//Get all booking details from user
function bookingFun() {
    const data_check_in = document.getElementById("Check_in").value;
    const data_Check_out = document.getElementById("Check_out").value;
    const data_Adults = document.getElementById("Adults").value;
    const data_Childrens = document.getElementById("Childrens").value;
    const data_Name = document.getElementById("Name").value;
    const phone_number = document.getElementById("phone_number").value;
    const data_email = document.getElementById("email").value;
    const data_address = document.getElementById("address").value;
    const data_room_type = document.getElementById("room_type").value;
    const data_number_of_rooms = document.getElementById("number_of_rooms").value;
    const data_ac = document.getElementById("ac");
    const data_nonac = document.getElementById("nonac");

    //Validation of all data received
    if (!check_in_fun(data_check_in) | !check_out_fun(data_Check_out) | !adults_fun(data_Adults) | !children_fun(data_Childrens) | !name_fun(data_Name) | !phone_number_fun(phone_number) | !email_fun(data_email) | !address_fun(data_address) | !room_type_fun(data_room_type) | !numbs_of_room_fun(data_number_of_rooms) | !conditioner_type_fun(data_ac, data_nonac)) {
        return false;
    }
}

//Check in
function check_in_fun(data_check_in) {
    if (data_check_in === "") {
        document.getElementById("Check_in_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("Check_in_error").innerHTML = "";
        return true;
    }
}

//Check out
function check_out_fun(data_Check_out) {
    if (data_Check_out === "") {
        document.getElementById("Check_out_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("Check_out_error").innerHTML = "";
        return true;
    }
}

//Adult
function adults_fun(data_Adults) {
    if (data_Adults === "") {
        document.getElementById("Adults_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("Adults_error").innerHTML = "";
        return true;
    }
}

//Children
function children_fun(data_Childrens) {
    if (data_Childrens === "") {
        document.getElementById("Childrens_error").innerHTML = "Field can't be empty or enter 0 if no children  ";
        return false;
    } else {
        document.getElementById("Childrens_error").innerHTML = "";
        return true;
    }
}

//Name
function name_fun(data_Name) {
    if (data_Name === "") {
        document.getElementById("Name_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("Name_error").innerHTML = "";
        return true;
    }
}

//Phone number
function phone_number_fun(phone_number) {
    if (phone_number === "") {
        document.getElementById("phone_number_error").innerHTML = "Field can't be empty";
        return false;
    } else if (phone_number.length != 10) {
        document.getElementById("phone_number_error").innerHTML = "Invalid phone number";
        return false;
    } else {
        document.getElementById("phone_number_error").innerHTML = "";
        return true;
    }
}

//Email
function email_fun(data_email) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (data_email === "") {
        document.getElementById("email_error").innerHTML = "Field can't be empty";
        return false;
    } else if (!data_email.match(mailFormat)) {
        document.getElementById("email_error").innerHTML = "Please enter correct email address";
        return false;
    } else {
        document.getElementById("email_error").innerHTML = "";
        return true;
    }
}

//Address
function address_fun(data_address) {
    if (data_address === "") {
        document.getElementById("address_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("address_error").innerHTML = "";
        return true;
    }
}

//Room Type
function room_type_fun(data_room_type) {
    if (data_room_type === "") {
        document.getElementById("room_type_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("room_type_error").innerHTML = "";
        return true;
    }
}

//Numbers of room
function numbs_of_room_fun(data_number_of_rooms) {
    if (data_number_of_rooms === "") {
        document.getElementById("number_of_rooms_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("number_of_rooms_error").innerHTML = "";
        return true;
    }
}

function conditioner_type_fun(data_ac, data_nonac){
    if(!data_ac.checked && !data_nonac.checked){
        document.getElementById("conditioner_error").innerHTML = "Please check any one";
        return false;
    }else{
        document.getElementById("conditioner_error").innerHTML = "";
        return true;
    }
}