function truncate(str,number){
    if ( str.length <= number)
        return str;  
    else
        return str.slice(0, number);
}

function windowWidth(number, elementId){
    var text  = document.getElementById(elementId).innerText;
    if (window.innerWidth < 992 && window.outerHeight< 992 )
    {
        var trunc = truncate (text, number);
        document.getElementById(elementId).innerHTML = trunc;
    }
}

windowWidth (-24, "img-text");
windowWidth (-40, "one-goal");
windowWidth (-87, "our-specialty");
windowWidth (-236, "news-1");
windowWidth (-87, "news-2");
windowWidth (-22, "news-3");