// Get the details
let check_in = localStorage.getItem("check_in");
let check_out = localStorage.getItem("check_out");
let adults = localStorage.getItem("adults");
let childrens = localStorage.getItem("childrens");
let fullname = localStorage.getItem("name");
let phone_number = localStorage.getItem("phone_number");
let email = localStorage.getItem("email");
let address = localStorage.getItem("address");
let room_type = localStorage.getItem("room_type");
let number_of_rooms = localStorage.getItem("number_of_rooms");
let total_days = localStorage.getItem("total_days");
let total_people = localStorage.getItem("total_people");
let room_price = localStorage.getItem("room_price");
let total_amount_price = localStorage.getItem("total_amount_price");


//Set the details to input Field
document.getElementById("Check_in").value = check_in;
document.getElementById("Check_out").value = check_out;
document.getElementById("Adults").value = adults;
document.getElementById("Childrens").value = childrens;
document.getElementById("Name").value = fullname;
document.getElementById("phone_number").value = phone_number;
document.getElementById("email").value = email;
document.getElementById("address").value = address;
document.getElementById("room_type").value = room_type;
document.getElementById("number_of_rooms").value = number_of_rooms;
document.getElementById("total_days").value = total_days;
document.getElementById("total_people").value = total_people;
document.getElementById("room_price").value = room_price;
document.getElementById("total_amount_price").value = total_amount_price;


//Remove the data from local storage
//window.localStorage.clear();
