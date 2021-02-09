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
$(function(){
    $("a").each(function(){
            if ($(this).attr("href") == window.location.pathname){
                    $(this).addClass("menu_active");
            }
    });
});