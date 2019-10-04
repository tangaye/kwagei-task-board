var tasks = [];
var input_val, task_obj;

/**
 * Get value from input element when the submit button is clicked
 */
document.getElementById('submit').addEventListener('click', function(){
    input_val = document.getElementById('new_task').value;
    createTask(input_val);
    input_val = "";
})


/*
* @param {string} task - takes in a task 
* and stores it in the tasks array
*/
function createTask(task) {
    const date = new Date();
    task_obj = {
        task: task,
        date_created: date.now()
    };
    tasks.push(task_obj);
    localStorage.setItem('task', JSON.stringify(tasks));
    return tasks;
}