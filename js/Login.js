var loginsystem = document.getElementById("login_system");
var loginsubmit = document.getElementById("login_button");



loginsubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const name = loginsystem.user_username.value;
    const pass = loginsystem.user_password.value;

    if (name === "root" && pass === "admin") {
        alert("oh yeah");
        window.location.href = '/uh_projects_pbconsulting/helpdesk/index.html';
    }
    else if (name === "customer" && pass === "sample") {
        alert("welcome back!");
        window.location.href = 'CustomerMainPage.html';
    }
})