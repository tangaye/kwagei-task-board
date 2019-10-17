var allEditButton = document.querySelectorAll('button')
var editTaskInput = document.getElementById('')
var getTaskFromLocalstorage = JSON.parse(loccalstorage.getItem('task'))
var getButtonId = 0;

console.log(getTaskFromLocalstorage)
allEditButton.forEach(button=>{
    button.addEventListener('click', (event)=>{
        getButtonId = event.target.id;
        editTaskInput.value = getTaskFromLocalstorage[getButtonId].task
        
    })
})

function updateTask(){

}
