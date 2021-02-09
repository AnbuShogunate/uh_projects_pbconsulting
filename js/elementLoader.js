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
$(function() {
    // this will get the full URL at the address bar
    var url = window.location.href;

    // passes on every "a" tag
    $("#navBar a").each(function() {
        // checks if its the same on the address bar
        if (url == (this.href)) {
            $(this).closest("li").addClass("menu_active");
            //for making parent of submenu active
           $(this).closest("li").parent().parent().addClass("menu_active");
        }
    });
});  