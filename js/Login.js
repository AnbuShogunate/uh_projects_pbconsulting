
var islogin = document.cookie;

var checklogin;


function validation(){
    var username = document.getElementById('usernameid').value;
    var password = document.getElementById('passwordid').value;
    checklogin = false;
    //var islogin = setcookie("admin");
    if(username === 'admin' && password === 'root' && checklogin === true)
    {
        alert("you are already logged in!");
        location.reload();
        return false;
    }
    else if(username === 'admin' && password === 'root' && checklogin === false)
    {
        document.cookie = 'username=root; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/'; //creates cookie
        islogin = document.cookie;
        checklogin = true;
        unhiding();
        alert(checklogin);
        window.location = '/uh_projects_pbconsulting/helpdesk/index.html';
        return true;
    }
    else{
        alert("invalid username or password!");
        return false;
    }
}

function unvalidate(){
    checklogin = true;
    if(checklogin === true)
    {
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'; //removes cookie
        //checklogin = document.cookie;
        hiding();
        //location.reload();
        alert("you have been logged out");
        return true;
    }
    else{
        alert("you are not log in yet");
        return false;
    }
}

function hiding(){
    document.getElementById("something").style.visibility = "hidden";
}
function unhiding(){
    document.getElementById("something").style.visibility = "visible";
}
/*function setcookie(name,value,days){
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}*/