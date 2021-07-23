$(document).ready(function() {
    $("#lightSlider").lightSlider(); 
  });

$(document).ready(function() {
$('.autoWidth').lightSlider({
    autoWidth:true,
    loop:true,
    onSliderLoad: function() {
        $('.autoWidth').removeClass('cS-hidden');
    } 
});  
});

$(document).ready(function() {
    $('.categoriesSlider').lightSlider({
        autoWidth:true,
        loop:true,
        pager: false,
        onSliderLoad: function() {
            $('.categoriesSlider').removeClass('cS-hidden');
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