var username_values = document.getElementById("username_id").value;
var password_values = document.getElementById("password_id").value;

function validation(){
    if (username_values === "admin" && password_values === "root") {
        alert("welcome back!");
        //setcookie("username", username_input, 365);
        window.location = '/uh_projects_pbconsulting/helpdesk/index.html';
    }
    else {
        alert("invalid username or password!");
    }
}