var username = document.getElementById('usernameid').value;
var password = document.getElementById('passwordid').value;
var islogin = document.cookie;


function validation(){

    if(islogin == 'root')
    {
        alert("you are already logged in!");
        location.reload();
        return false;
    }
    else if(username === 'admin' && password === 'root')
    {
        document.cookie = 'root';
        islogin = document.cookie;

        alert("welcome back!");
        window.location = '/uh_projects_pbconsulting/helpdesk/index.html';
        return true;
    }
    else{
        alert("invalid username or password!");
        return false;
    }
}

function unvalidate(){
    
    document.cookie = null;
    islogin = null;

    alert("you have been logged out");
}