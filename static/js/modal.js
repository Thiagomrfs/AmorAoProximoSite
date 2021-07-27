function modal (){

    // Get the modal
    var modal = document.getElementById("myModal"); // Modal Id

    // Get the button
    var btn = document.getElementById("myBtnModal"); //Button Id

    // Get the "X"
    var span = document.getElementsByClassName("close-modal")[0];

    // Opens the Modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Close the Modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close if clicked elsewhere
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
    }
    }


}