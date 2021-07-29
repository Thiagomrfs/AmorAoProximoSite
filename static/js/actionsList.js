sliders = []

params = {
    pager: false,
    autoWidth: true,
    controls: false,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    addClass: 'sliderContainer',
    responsive : [
        {
            breakpoint:800,
            settings: {
                item:3,
                slideMove:1,
                slideMargin:6,
            }
        },
        {
            breakpoint:480,
            settings: {
                item:2,
                slideMove:1
            }
        }
    ]
}

$(document).ready(function() {
    let slider = $("#lightSlider1").lightSlider(params);
    sliders.push(slider);
});

$(document).ready(function() {
    let slider = $("#lightSlider2").lightSlider(params);
    sliders.push(slider) 
});

$(document).ready(function() {
    let slider = $("#lightSlider3").lightSlider(params);
    sliders.push(slider) 
});

$(document).ready(function() {
    let slider = $("#lightSlider4").lightSlider(params);
    sliders.push(slider) 
});




categories = document.querySelectorAll(".category-card");
categories = Array.from(categories);

educationList = document.getElementById("education-actions");
cultureList = document.getElementById("culture-actions");
sportsList = document.getElementById("sports-actions");
foodList = document.getElementById("food-actions");
actions = [educationList, cultureList, sportsList, foodList];

relations = {
    "Educação": "education-actions",
    "Cultura": "culture-actions",
    "Esporte": "sports-actions",
    "Comida na mesa": "food-actions"
}

categories.map((c) => {
    c.addEventListener('click', function(event){
        clearCategorySelection();
        event.currentTarget.classList.add("selected");
        changeActionsVisibility(event.currentTarget.lastElementChild.innerText);
    });
})

function clearCategorySelection() {
    categories.map((c) => {
        c.classList.remove("selected");
    })
}

function changeActionsVisibility(category) {
    actions.map((action) => {
        if (action.id == relations[category]) 
            $(`#${action.id}`).show()
        else
            $(`#${action.id}`).hide()
    })

    sliders.map((slider) => {
        slider.refresh();
    });
    
    Array.from(document.querySelectorAll(".lightSlider")).map((c) => 
        // c.style = "height: 80%; width: 100%; padding-bottom: 0%; transform: translate3d(0px, 0px, 0px);"
        c.style = "display: flex; width: 100%; overflow: hidden;"
    )
}

changeActionsVisibility("Educação");
categories[0].classList.add("selected");