function updateInfographic() {
    let value = parseFloat(document.querySelector(".donation-indicator").value).toFixed(2);
    let totalPrice = 30;

    let percentage = 100*value / totalPrice

    let info = document.querySelector("#inf-full")
    info.style.clipPath = `inset(${100 - percentage}% 0px 0px 0px)`
}