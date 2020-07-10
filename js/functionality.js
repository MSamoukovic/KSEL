$(document).ready(function () {
    $("#toggle-btn").click(function () {
        $("#icon").toggleClass("far fa-times");
    })
});


function goToDiv(){
    var elmnt = document.getElementById("our-specialty-div");
    elmnt.scrollIntoView();
}