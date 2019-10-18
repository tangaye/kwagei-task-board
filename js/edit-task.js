var allEditButton = document.querySelectorAll('button')
var editTaskInput = document.getElementById('edit-task-name')
var getTaskFromLocalstorage = JSON.parse(localStorage.getItem('task'))
var editTaskSubmitInput = document.getElementById('updata-task')

var getButtonId = 0;

// gett the id of each edit button when clicked
allEditButton.forEach(button=>{
    button.addEventListener('click', (event)=>{
        getButtonId = event.target.id;
        console.log(button)
    })
})

// preset set the value of edit form
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
})
