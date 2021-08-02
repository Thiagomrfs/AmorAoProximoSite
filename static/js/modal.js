function modal (caller, details){

    let modal = document.getElementById('action-modal'); 
    let closebtn = modal.firstElementChild.querySelector('.close-modal')
    let callerElement = document.getElementById(caller); 
    
    modal.style.display = "block";

    updateModalData(modal, callerElement, details);


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

function updateModalData(modal, caller, details) {
    let title = modal.firstElementChild.querySelector('.modal-action-title')
    let startDate = modal.firstElementChild.querySelector('.modal-action-start')
    let endDate = modal.firstElementChild.querySelector('.modal-action-end')
    let description = modal.firstElementChild.querySelector('.modal-action-description')
    let responsible = modal.firstElementChild.querySelector('.modal-action-responsible')
    let requisites = modal.firstElementChild.querySelector('.modal-action-requisites')

    title.innerText = details['title']
    startDate.innerText = details['start_date']
    endDate.innerText = details['end_date']
    description.innerText = details['description']
    responsible.innerText = details['responsible']
    requisites.innerText = details['requisites']
}