const assignTask = document.querySelector("#assign-task");
const listOfUsers = document.querySelector("#list-of-users");
const getUsers = JSON.parse(localStorage.getItem("staff_data"));
const tasks = JSON.parse(localStorage.getItem("task"))
let taskName = "";
const checkbox_arr = [];
let task = 0;



// Get users from  localStorage and display them 
getUsers.forEach((user, index) => {
    listOfUsers.innerHTML += `
        <li><input type="checkbox" id=${index} onchange="pushUser(this)"> ${user.full_name}</li>
    `;
})


function pushUser(user) {
    if(user.checked == true) {
        checkbox_arr.push(getUsers[user.id].full_name)
    } else if(user.checked == false) {
        checkbox_arr.splice(checkbox_arr.indexOf(getUsers[user.id].full_name, 1));
    }
    console.log(checkbox_arr)
    return checkbox_arr;
}

document.body.addEventListener("click", function(e) {
    e.preventDefault();
    if(e.target.getAttribute("data-task-id") == 'assign') {
        taskName = tasks[e.target.id]
    }
})

console.log("Me: ",taskName)

assignTask.addEventListener("click", function(e) {
    e.preventDefault();
    
})

console.log("Checkbox: ", checkbox_arr)