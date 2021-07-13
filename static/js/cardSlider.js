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