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