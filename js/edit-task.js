var allEditButton = document.querySelectorAll('button');
var allDeleteButton = document.querySelectorAll('button.delete_button')
var editTaskInput = document.getElementById('edit-task-name')
var getTaskFromLocalstorage = JSON.parse(localStorage.getItem('task'))
var editTaskSubmitInput = document.getElementById('updata-task')
var get_delete_button_id = 0;
var getButtonId = 0;

// gett the id of each edit button when clicked
allEditButton.forEach(button=>{
    button.addEventListener('click', (event)=>{
        getButtonId = event.target.id;
        console.log(button)
    })
})

<<<<<<< HEAD
allDeleteButton.forEach(button => {
    button.addEventListener('click', function(event){
        get_delete_button_id= event.target.id;
        getTaskFromLocalstorage.splice(get_delete_button_id, 1);
        console.log(getTaskFromLocalstorage)
        localStorage.setItem('task', JSON.stringify(getTaskFromLocalstorage));
        location.reload(true);
    })
})

=======
// preset set the value of edit form
>>>>>>> 6baecb23822bf3130707dd98d4d7b820fe3cb726
function editTask(){
    console.log("task", getTaskFromLocalstorage[getButtonId].task);
    editTaskInput.value = getTaskFromLocalstorage[getButtonId].task;
}
editTask();

// update the localstorage if the submit button is click
editTaskSubmitInput.addEventListener('click', (event)=>{
    var date = new Date();
    getTaskFromLocalstorage[getButtonId].task = editTaskInput.value;
    getTaskFromLocalstorage[getButtonId].data_created = date.toDateString();

    localStorage.setItem('task', JSON.stringify(getTaskFromLocalstorage));
<<<<<<< HEAD
}
=======
})
>>>>>>> 6baecb23822bf3130707dd98d4d7b820fe3cb726
