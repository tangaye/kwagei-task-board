var allEditButton = document.querySelectorAll('button')
var editTaskInput = document.getElementById('edit-task-name')
var getTaskFromLocalstorage = JSON.parse(localStorage.getItem('task'))
var editTaskSubmitInput = document.getElementById('updata-task')

var getButtonId = 0;

console.log(getTaskFromLocalstorage)
allEditButton.forEach(button=>{
    button.addEventListener('click', (event)=>{
        getButtonId = event.target.id;
        console.log(button)
    })
})

function editTask(){
    console.log("task", getTaskFromLocalstorage[getButtonId].task);
    editTaskInput.value = getTaskFromLocalstorage[getButtonId].task;
}

editTask();

editTaskSubmitInput.addEventListener('click', (event)=>{
    updateTask()
})

function updateTask(){
    var date = new Date();
    getTaskFromLocalstorage[getButtonId].task = editTaskInput.value;
    getTaskFromLocalstorage[getButtonId].data_created = date.toDateString();

    localStorage.setItem('task', JSON.stringify(getTaskFromLocalstorage));

}
