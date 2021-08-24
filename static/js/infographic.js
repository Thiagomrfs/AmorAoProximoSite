function updateInfographic() {
    let value = parseFloat(document.querySelector(".donation-indicator").value).toFixed(2);

    if (isNaN(value)){
        return
    }

    let desc = document.querySelector("#inf-description");
    let totalPrice = 30;

    let percentage = 100*value / totalPrice;

    if (percentage > 100) percentage = 100;

    let info = document.querySelector("#inf-full");

    info.style.clipPath = `inset(${100 - percentage}% 0px 0px 0px)`;

    if (value > 30)
    {
        let quantity = value/30
        desc.innerHTML = `
        <div class="inf-quantity-indicator">
            <p>${quantity.toFixed(0)}</p>
        </div>
        <div class="inf-support-text">
            <p>
                cestas básicas serão arrecadadas com a sua<br/> doação,
                impactando a vida de <b>${quantity.toFixed(0)*5} pessoas</b>!
            </p>
        </div>
        `
    }
    else
    {
        desc.innerHTML = `
        <p>
            Com a sua doação conseguiremos o equivalente<br/>
            a <b>${percentage.toFixed(0)}%</b> de uma cesta básica!
        </p>
        `
    }
}