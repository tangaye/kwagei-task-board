// Get the modal
var assign_modal = document.getElementById("assign-modal");
var edit_modal = document.getElementById("edit-modal");
var modal_content = document.querySelector(".modal");


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var spans = document.querySelectorAll("span");
//console.log(spans[0])

// When the user clicks on the button, open the modal
function showModal(event) {
  // When the user clicks anywhere outside of the modal, close it
  console.log(event.target)
  if(event.target.getAttribute("data-edit") == "edit-task") {
    edit_modal.style.display = "block";
  } else if(event.target.getAttribute("data-task-id") == "assign") {
    assign_modal.style.display = "block";
  }
 
}

// When the user clicks on <span> (x), close the modal
  spans[0].addEventListener("click", function(e) {
    edit_modal.style.display = "none" 
})

spans[1].addEventListener("click", function(e) {
  assign_modal.style.display = "none" 
})


window.onclick = function(event) {
  if (event.target == edit_modal) {
    //assign_modal.style.display = "none";
    console.log(true)
    edit_modal.style.display = "none";
  } else if(event.target == assign_modal) {
    //edit_modal.style.display = "none";
    assign_modal.style.display = "none";
  }
}
