//var loginsystem = document.getElementById("login_system");
//var loginsubmit = document.getElementById("login_button");
//var loginsystem = document.getElementsByClassName("login_system");
//var logintable = document.getElementById("login_table");

/*

//loginsubmit.addEventListener("click", (e) => {
    e.preventDefault();
    var name = loginsystem.user_username.value;
    var pass = loginsystem.user_password.value;

    if (name === "root" && pass === "admin") {
        //window.location.href = '/uh_projects_pbconsulting/helpdesk/index.html';
    }
    else if (name === "customer" && pass === "sample") {
        //window.location.href = 'CustomerMainPage.html';
    }
})


function login(loginsubmit) {
    if (loginsubmit.getElementById("username_id") == "Admin" && loginsubmit.getElementById("password_id") == "root") {
        location = 'C:\Users\ManaMenu\Documents\GitHub\uh_projects_pbconsulting\helpdesk\index.html';
    }
    else {
        alert("invalid info");
    }
}
*/

var cookie = 0;

document.cookie = newCookie;

function validate() {
    var username = document.getElementById("username_id");
    var password = document.getElementById("password_id");

    var username_input = username.value;
    var password_input = password.value;

    if (username_input == 'admin' && password_input == 'root') {
        cookie = 1;
        location.reload();
        alert("welcome back!");
        window.location = "/uh_projects_pbconsulting/helpdesk/index.html";
        return true;
    }
    else {
        return false;
    }
}

function leCookie() {
}
function logout(){
    window.location = "/uh_projects_pbconsulting/index.html";
}

function validation() {
    alert("please login first");
    window.location = "/uh_projects_pbconsulting/index.html"; 
}

function cookiecheck() {
    if (cookie == 1) {
        window.location = "/uh_projects_pbconsulting/helpdesk/index.html";
    }
    else {
        validation();
    }
}