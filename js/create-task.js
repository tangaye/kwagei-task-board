var tasks = [];
var task_obj;
var input_val = document.getElementById('new_task');

/**
 * Get value from input element when the submit button is clicked
 */
document.getElementById('submit').addEventListener('click', function(){
    createTask(input_val.value);
    input_val.value = "";
});



/*
* @param {string} task - takes in a task 
* and stores it in the tasks array
*/
function createTask(task) {
    const date = new Date();
    task_obj = {
        task: task,
        date_created: date.toDateString()
    };
    tasks.push(task_obj);
    localStorage.setItem('task', JSON.stringify(tasks));
    return tasks;
}