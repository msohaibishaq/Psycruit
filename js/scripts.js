$(document).ready(function(){
    window.onscroll = function() {scrollFunction()};
    var a = $("#about").offset().top - 15;
 function scrollFunction() {
if (document.body.scrollTop > a || document.documentElement.scrollTop > a ) {
    document.getElementById("primaryNav").style.top = "0";
} else {
    document.getElementById("primaryNav").style.top = "-50px";
}
}
});