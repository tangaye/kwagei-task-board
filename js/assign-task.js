const assignTask = document.querySelectorAll("[data-task-id]");
const listOfUsers = document.querySelector("#list-of-users");
const getUsers = JSON.parse(localStorage.getItem("staff_data"));
const checkbox_arr = [];

assignTask.forEach((task) => {
    task.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(task.id)
    })
})


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

console.log("Checkbox: ", checkbox_arr)