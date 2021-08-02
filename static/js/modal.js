function modal (caller){

    let modal = document.getElementById('action-modal'); 
    let closebtn = modal.firstElementChild.querySelector('.close-modal')
    let callerElement = document.getElementById(caller); 
    
    modal.style.display = "block";

    updateModalData(modal, callerElement);


    // Close the Modal
    closebtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close if clicked elsewhere
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

function updateModalData(modal, caller) {
    let title = modal.firstElementChild.querySelector('.modal-action-title')
    let description = modal.firstElementChild.querySelector('.modal-action-description')
    title.innerText = caller.id.split('-')[1]
    description.innerText = "kappa"
}