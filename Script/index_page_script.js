//For Navbar Scroller
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
};

//For Navbar Hide on click
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
});


function queryBooking() {
    let check_in = document.getElementById("check_in").value;
    let check_out = document.getElementById("check_out").value;
    let adult = document.getElementById("adult").value;
    let children = document.getElementById("children").value;

    localStorage.setItem("check_in_data", check_in);
    localStorage.setItem("check_out_data", check_out);
    localStorage.setItem("adult_data", adult);
    localStorage.setItem("children_data", children);
}