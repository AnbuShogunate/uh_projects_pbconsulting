var usernamevalues = document.getElementById("usernameid").value;
var passwordvalues = document.getElementById("passwordid").value;

function validation(){
    if (usernamevalues === "admin" && passwordvalues === "root") {
        alert("welcome back!");
        //setcookie("username", username_input, 365);
        window.location = '/uh_projects_pbconsulting/helpdesk/index.html';
    }
    else {
        alert("invalid username or password!");
    }
}