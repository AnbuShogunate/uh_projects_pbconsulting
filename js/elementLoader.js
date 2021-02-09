function load_home() {
    document.getElementById("header-loader").innerHTML='<object type="text/html" data="header.html" ></object>';
}
$(function () {
    $("#header-loader").load("/uh_projects_pbconsulting/page_elements/header.html");
});