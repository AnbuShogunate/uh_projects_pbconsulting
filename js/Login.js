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
var username = document.getElementById("username_id");
var password = document.getElementById("password_id");

var username_input = username.value;
var password_input = password.value;

function login(){
    if(getCookie(username_input)=="admin"){
        alert("you are already logged in!");
        window.location = "/uh_projects_pbconsulting/helpdesk/index.html";
    }
    else{
        if (username_input == 'admin' && password_input == 'root') {
            //location.reload(); not sure about what this code does
            alert("welcome back!");
            setcookie("username", username_input, 365);
        }
        else {
            alert("invalid username or password!");
        }
    }
}

function leCookie() {
}
function logout(){
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    //setcookie("username", username_input, 0);
    document.cookie = username_input + '=;expires=Thu, 01 Jan 2000 00:00:01 GMT;';
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

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("You are already logged in!");
    }
    else {
        alert("please login first!");
        window.location = "/uh_projects_pbconsulting/index.html"; 
    }
}