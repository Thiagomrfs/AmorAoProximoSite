$(document).ready(function() {
    $("#lightSlider1").lightSlider(); 
});

$(document).ready(function() {
    $("#lightSlider2").lightSlider(); 
});

$(document).ready(function() {
    $("#lightSlider3").lightSlider(); 
});

$(document).ready(function() {
    $("#lightSlider4").lightSlider(); 
});

$(document).ready(function() {
    $('.autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        adaptiveHeight: true,
        onSliderLoad: function() {
            $('.autoWidth').removeClass('cS-hidden');
        }
    });  
});

var nav = document.getElementById('nav');
window.addEventListener("scroll", function(event) {
    nav.style.transition = "700ms"
    if(window.pageYOffset>100){
        nav.style.background = "var(--primary)";
    }
    else{
        nav.style.background = "transparent";
    }
});