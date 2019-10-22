/**
* Get value from input element when the submit button is clicked
*/
var submit_task_btn = document.getElementById("submit-create-task");
var create_task_input_val = document.getElementById('new_task');

submit_task_btn.addEventListener("click", function(e) {
    console.log(create_task_input_val.value)
    createTask(create_task_input_val.value)
    create_task_input_val.value = "";
})