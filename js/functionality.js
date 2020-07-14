$(document).ready(function () {
    $("#toggle-btn").click(function () {
        $("#icon").toggleClass("fal fa-times");
        var toggleBtn = document.getElementById("toggle-btn");
        setTimeout(() => {
            toggleBtn.disabled = false;
        }, 500);

        setTimeout(() =>{
            toggleBtn.disabled = true;
        });


    })
});