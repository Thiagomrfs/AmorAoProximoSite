$(document).ready(function() {
    $("#lightSlider").lightSlider(); 
  });

$(document).ready(function() {
$('#autoWidth').lightSlider({
    autoWidth:true,
    loop:true,
    onSliderLoad: function() {
        $('#autoWidth').removeClass('cS-hidden');
    } 
});  
});