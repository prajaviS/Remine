//NAVIGATION
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}





//ONSCROLL FUNCTION
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myTopnav").style.backgroundColor = "#1e1e1e";
        document.getElementById("myTopnav").style.boxShadow = "0px 6px 16px -6px rgba(1,1,1,0.5)";
    } else {
        document.getElementById("myTopnav").style.backgroundColor = "transparent";
        document.getElementById("myTopnav").style.boxShadow = "0px 0px 0px 0px rgba(1,1,1,0.5)";
    }
}





