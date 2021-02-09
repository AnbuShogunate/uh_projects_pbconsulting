$(function () {
    $("#header-splash-load").load("/uh_projects_pbconsulting/page_elements/header-splash.html");
});
$(function () {
    $("#header-main-load").load("/uh_projects_pbconsulting/page_elements/header-main.html");
});
$(function () {
    $("#footer-load").load("/uh_projects_pbconsulting/page_elements/footer.html");
});
$(function () {
    $("#navbar-load").load("/uh_projects_pbconsulting/page_elements/navbar.html");
});

$("#navBar li a").click(function() {
    var $Link = $(this); // cache it as we will use ot mote than once
    //also url == a.href cannot return true if you use relative url in the link.
    //url most likely http://domain.com/pagename href will be just a page name
    //if active do nothing
    if (!$Link.hasClass("menu_active")) {
        $Link.closest("ul") //find menu container
            .find("li.menu_active").removeClass('menu_active'); //find active and remove it
        $Link.addClass('menu_active');
    }
});


/* //https://makitweb.com/highlight-current-page-menu-item-with-jquery/
$(document).ready(function() {
    var url = window.location.href;
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    url = url.substr(url.lastIndexOf("/") + 1);
    if(url == ''){
        url = 'index.html';
    }
    $('.main_menu_ul li').each(function(){
        var href = $(this).find('a').attr('href');
        if(url == href){
            var parentClass = $(this).parent('ul').attr('class');
            if(parentClass == 'submenu'){
                $(this).addClass('submenu_active');
                $(this).parents('.main_menu_ul li').addClass('menu_active');
            }else{
                $(this).addClass('menu_active');
            }

        }
    });
}); */