var nav = document.getElementById('nav');
window.addEventListener("scroll", function(event) {
    nav.style.transition = "700ms"
    if(window.pageYOffset>10){
        nav.style.background = "var(--primary)";
        nav.style.boxShadow = "-8px 5px 10px rgba(0, 0, 0, 0.25)";
    }
    else{
        nav.style.background = "transparent";
        nav.style.boxShadow = "";
    }
});