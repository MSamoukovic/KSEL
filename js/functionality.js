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

function truncate(str,number){
    if ( str.length <= number)
        return str;  
    else
        return str.slice(0, number);
}

function windowWidth(number, elementId){
    var text  = document.getElementById(elementId).innerText;
    console.log(text);
    if (window.innerWidth < 992 && window.outerHeight< 992 )
    {
        var trunc = truncate (text, number);
        document.getElementById(elementId).innerHTML = trunc;
    }
}

function windowLgWidth(number, elementId){
    var text  = document.getElementById(elementId).innerText;
    if (window.innerWidth > 992)
    {
        var trunc = truncate (text, number);
        document.getElementById(elementId).innerHTML = trunc;
    }
}

// function removeBorder(id){
//     var text  = document.getElementById(id);
//     text.innerHTML = '';
// }