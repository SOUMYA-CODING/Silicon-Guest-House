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

const Check_in = document.getElementById("Check_out").value;
const Check_out = document.getElementById("Check_out").value;
let total_date = Date.parse(Check_out) - Date.parse(Check_in);
document.getElementById("total_days_label").innerHTML = total_date;

let Adults = document.getElementById("Adults").value;
let Childrens = document.getElementById("Childrens").value;
let total_people = 0

if (Childrens === "") {
    Childrens = 0
}
total_people = parseInt(Adults) + parseInt(Childrens)
document.getElementById("total_people_label").innerHTML = total_people;

if (Adults === "") {
    Adults = 0
}
total_people = parseInt(Adults) + parseInt(Childrens)
document.getElementById("total_people_label").innerHTML = total_people;

function bookingValidations() {
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

    //Validation of all data received
    if (!check_in_fun(data_check_in) | !check_out_fun(data_check_in, data_Check_out) | !adults_fun(data_Adults) | !children_fun(data_Childrens) | !name_fun(data_Name) | !phone_number_fun(phone_number) | !email_fun(data_email) | !address_fun(data_address) | !room_type_fun(data_room_type) | !numbs_of_room_fun(data_number_of_rooms)) {
        return false;
    }

    const data_total_days = document.getElementById("total_days_label").innerHTML;
    const data_total_people = document.getElementById("total_people_label").innerHTML;
    const data_room_price = document.getElementById("room_price").innerHTML;
    const data_total_amount_price = document.getElementById("total_amount_price").innerHTML;

    // Pass the value to Confirm Booking
    localStorage.setItem("check_in", data_check_in);
    localStorage.setItem("check_out", data_Check_out);
    localStorage.setItem("adults", data_Adults);
    localStorage.setItem("childrens", data_Childrens);
    localStorage.setItem("name", data_Name);
    localStorage.setItem("phone_number", phone_number);
    localStorage.setItem("email", data_email);
    localStorage.setItem("address", data_address);
    localStorage.setItem("room_type", data_room_type);
    localStorage.setItem("number_of_rooms", data_number_of_rooms);
    localStorage.setItem("total_days", data_total_days);
    localStorage.setItem("total_people", data_total_people);
    localStorage.setItem("room_price", data_room_price);
    localStorage.setItem("total_amount_price", data_total_amount_price);

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
function check_out_fun(data_check_in, data_Check_out) {
    if (data_Check_out === "") {
        document.getElementById("Check_out_error").innerHTML = "Field can't be empty";
        return false;
    } else if (Date.parse(data_Check_out) <= Date.parse(data_check_in)) {
        document.getElementById("Check_out_error").innerHTML = "Invalid Check out date";
        return false;
    } else {
        document.getElementById("Check_out_error").innerHTML = "";
        return true;
    }
}

//Adult
function adults_fun(data_Adults) {
    if (data_Adults === "") {
        document.getElementById("Adults_error").innerHTML = "Field can't be empty or enter 0 if no adults";
        return false;
    } else {
        document.getElementById("Adults_error").innerHTML = "";
        return true;
    }
}

//Children
function children_fun(data_Childrens) {
    if (data_Childrens === "") {
        document.getElementById("Childrens_error").innerHTML = "Field can't be empty or enter 0 if no children";
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
        document.getElementById("room_type_error").innerHTML = "Please select a room";
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
    } else if (data_number_of_rooms < 1) {
        document.getElementById("number_of_rooms_error").innerHTML = "Can't be 0";
        return false;
    } else {
        document.getElementById("number_of_rooms_error").innerHTML = "";
        return true;
    }
}

// For Total Dates
document.getElementById("Check_out").addEventListener("change", function () {
    const Check_in = document.getElementById("Check_out").value;
    const Check_out = document.getElementById("Check_out").value;
    let total_date = Date.parse(Check_out) - Date.parse(Check_in);
    document.getElementById("total_days_label").innerHTML = total_date;
})


// For Adult
document.getElementById("Adults").addEventListener("change", function () {
    let Adults = document.getElementById("Adults").value;
    let Childrens = document.getElementById("Childrens").value;
    if (Childrens === "") {
        Childrens = 0
    }
    let total_people = parseInt(Adults) + parseInt(Childrens)
    document.getElementById("total_people_label").innerHTML = total_people;
})

// For Children
document.getElementById("Childrens").addEventListener("change", function () {
    let Adults = document.getElementById("Adults").value;
    let Childrens = document.getElementById("Childrens").value;
    if (Adults === "") {
        Adults = 0
    }
    let total_people = parseInt(Adults) + parseInt(Childrens)
    document.getElementById("total_people_label").innerHTML = total_people;
})

// For Room Type
document.getElementById("number_of_rooms").addEventListener("change", function () {
    const data_room_type = document.getElementById("room_type").value;
    const data_number_of_rooms = document.getElementById("number_of_rooms").value;

    if (data_room_type === "AC Room") {
        document.getElementById("room_price").innerHTML = parseInt(data_number_of_rooms) * 1500;
        document.getElementById("tax_price").innerHTML = "400";
    } else if (data_room_type === "NON AC ROOM") {
        document.getElementById("room_price").innerHTML = parseInt(data_number_of_rooms) * 1700;
        document.getElementById("tax_price").innerHTML = "400";
    } else if (data_room_type === "Deluxe Room") {
        document.getElementById("room_price").innerHTML = parseInt(data_number_of_rooms) * 1800;
        document.getElementById("tax_price").innerHTML = "400";
    }


    // For calculating total price
    const room_price = document.getElementById("room_price").innerHTML;
    const tax_price = document.getElementById("tax_price").innerHTML;
    const total_amount_price = parseInt(room_price) + parseInt(tax_price);
    document.getElementById("total_amount_price").innerHTML = total_amount_price;
});