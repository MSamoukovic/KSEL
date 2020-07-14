function truncate(str,number){
    if ( str.length <= number)
        return str;  
    else
        return str.slice(0, number);
}

function windowLgWidth(number, elementId){
    var text  = document.getElementById(elementId).innerText;
    if (window.innerWidth > 992)
    {
        var trunc = truncate (text, number);
        document.getElementById(elementId).innerHTML = trunc;
    }
}

windowLgWidth(-214, "one-idea-div");