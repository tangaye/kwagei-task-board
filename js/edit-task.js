var allEditButton = document.querySelectorAll('button');
var allDeleteButton = document.querySelectorAll('button.delete_button')
var editTaskInput = document.getElementById('edit-task-name')
var getTaskFromLocalstorage = JSON.parse(localStorage.getItem('task'))
var editTaskSubmitInput = document.getElementById('updata-task')
var get_delete_button_id = 0;
var getButtonId = 0;

console.log(getTaskFromLocalstorage)
allEditButton.forEach(button=>{
    button.addEventListener('click', (event)=>{
        getButtonId = event.target.id;
        console.log(button)
    })
})

allDeleteButton.forEach(button => {
    button.addEventListener('click', function(event){
        get_delete_button_id= event.target.id;
        getTaskFromLocalstorage.splice(get_delete_button_id, 1);
        console.log(getTaskFromLocalstorage)
        localStorage.setItem('task', JSON.stringify(getTaskFromLocalstorage));
        location.reload(true);
    })
})

function editTask(){
    console.log("task", getTaskFromLocalstorage[getButtonId].task);
    editTaskInput.value = getTaskFromLocalstorage[getButtonId].task;
}

editTaskSubmitInput.addEventListener('click', (event)=>{
    updateTask()
})

function updateTask(){
    var date = new Date();
    getTaskFromLocalstorage[getButtonId].task = editTaskInput.value;
    getTaskFromLocalstorage[getButtonId].data_created = date.toDateString();

    localStorage.setItem('task', JSON.stringify(getTaskFromLocalstorage));
}
