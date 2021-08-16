function updateInfographic() {
    let value = parseFloat(document.querySelector(".donation-indicator").value).toFixed(2);
    let desc = document.querySelector("#inf-description");
    let totalPrice = 30;

    let percentage = 100*value / totalPrice;

    let info = document.querySelector("#inf-full");

    info.style.clipPath = `inset(${100 - percentage}% 0px 0px 0px)`;

    if (value > 30)
    {
        let quantity = value/30
        desc.innerHTML = `Com a sua doação conseguimos arrecadar<br />cerca de <b>${quantity.toFixed(0)}</b> cestas básicas!`
    }
    else
        desc.innerHTML = `Com a sua doação conseguimos o equivalente<br/>a <b>${percentage.toFixed(0)}%</b> de uma cesta básica!`
}