//var loginsystem = document.getElementById("login_system");
var loginsubmit = document.getElementById("login_button");
var loginsystem = document.getElementsByClassName("login_system");

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
*/

function login(loginsubmit) {
    if (loginsubmit.getElementById("username_id") == "Admin" && loginsubmit.getElementById("password_id") == "root") {
        location = '/uh_projects_pbconsulting/helpdesk/index.html';
    }
    else {
        alert("invalid info");
    }
}