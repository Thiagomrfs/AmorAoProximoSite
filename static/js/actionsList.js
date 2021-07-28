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
}

changeActionsVisibility("Educação");
categories[0].classList.add("selected");