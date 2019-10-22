
var editTaskSubmitInput = document.getElementById('update-task')



// preset set the value of edit form

editTask();

// update the localstorage if the submit button is click
editTaskSubmitInput.addEventListener('click', (event)=>{
    var date = new Date();
    getTaskFromLocalstorage[getButtonId].task = editTaskInput.value;
    getTaskFromLocalstorage[getButtonId].data_created = date.toDateString();

    localStorage.setItem('task', JSON.stringify(getTaskFromLocalstorage));
})
