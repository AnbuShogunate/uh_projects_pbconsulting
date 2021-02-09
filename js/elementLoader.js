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

//https://html-online.com/articles/highlight-active-menu-item-script/
$(document).ready(function() {
    console.log($(this).attr('href'));
    $("#navbar-load a").each(function() {
        if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
            $(this).parent().addClass('menu_active');
        }
        console.log($(this).attr('href'));
    });
});