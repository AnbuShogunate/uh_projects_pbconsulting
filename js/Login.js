
var islogin = document.cookie;


function validation(){
    var username = document.getElementById('usernameid').value;
    var password = document.getElementById('passwordid').value;
    v//ar islogin = setcookie("admin");
    if(islogin.username == 'root')
    {
        alert("you are already logged in!");
        location.reload();
        return false;
    }
    else if(username === 'admin' && password === 'root')
    {
        document.cookie = 'username=root; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/';
        //setcookie("root", islogin, 365);

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

    if(islogin.username== 'root')
    {
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        islogin = document.cookie;
        location.reload();
        alert("you have been logged out");
    }
    else{
        alert("you are not log in yet");
    }
}

/*function setcookie(name,value,days){
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}*/