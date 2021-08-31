var offset = 0;

function next() {
    let container = document.querySelector(".cont");
    if (offset < 200)
        offset += 100;
    container.style.transform = `translateX(-${offset}vw)`;
}

function previous() {
    let container = document.querySelector(".cont");
    if (offset > 0)
        offset -= 100;
    container.style.transform = `translateX(-${offset}vw)`;
}