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
    if (slider.length !== 0) {
        sliders.push(slider);
    }
});

$(document).ready(function() {
    let slider = $("#lightSlider2").lightSlider(params);
    if (slider.length !== 0) {
        sliders.push(slider);
    }
});

$(document).ready(function() {
    let slider = $("#lightSlider3").lightSlider(params);
    if (slider.length !== 0) {
        sliders.push(slider);
    }
});

$(document).ready(function() {
    let slider = $("#lightSlider4").lightSlider(params);
    if (slider.length !== 0) {
        sliders.push(slider);
    }
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
    "Comida": "food-actions"
}

categories.map((c) => {
    c.addEventListener('click', function(event){
        clearCategorySelection();
        event.currentTarget.classList.add("selected");
        let category = event.currentTarget.lastElementChild.alt.split(" ")[1]
        category = category.charAt(0).toUpperCase() + category.slice(1);
        changeActionsVisibility(category);
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
}

changeActionsVisibility("Educação");
categories[0].classList.add("selected");