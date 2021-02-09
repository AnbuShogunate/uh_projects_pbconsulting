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

$(document).ready(function () {
    console.log("current page", window.location.href);
    $("[href]").each(function () {
        $('a[href]:not([href=#])').each(function () {

            if (window.location.href.indexOf($(this).attr('href')) > -1) {
                console.log($(this).attr('href') +" is active ");
                $(this).addClass('menu_active');
            }
            else {
                console.log($(this).attr('href') + "is not active ");
            }
        });
    });
});