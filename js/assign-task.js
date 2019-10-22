
const buttons = querySelectorAll("button");


const tasks = JSON.parse(localStorage.getItem("task"))
let taskName = "";
let taskButtons = [];

let task = 0;


buttons.forEach((button) => {
    task = button
    taskButtons.push(button);
})

console.log(task)
console.log(taskButtons)







// document.body.addEventListener("click", function(e) {
//     e.preventDefault();
//     if(e.target.getAttribute("data-task-id") == 'assign') {
//         taskName = tasks[e.target.id]
//     }
// })

console.log("Me: ",taskName)

assignTask.addEventListener("click", function(e) {
    e.preventDefault();
    
})

console.log("Checkbox: ", checkbox_arr)