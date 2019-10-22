/**=====================================================================
 *                   CREATE TASK                                       #
 *                                                                     #
 * =====================================================================                                                                     
 */
/*
* @param {string} task - takes in a task 
* and stores it in the tasks array
*/
function createTask(task) {
    var task_arr = JSON.parse(localStorage.getItem('task'));

    task_arr.push(task_obj = {
        task: task,
        date_created: new Date().toDateString()
    });
    console.log(task_arr)
    localStorage.setItem('task', JSON.stringify(task_arr));
    location.assign("display-tasks.html")
    return task_arr;
}



/*
*@param displayTask - A function that takes in an array of objects and render it dynamically to the page
*/
function displayTask() {
    var get_data_from_db = JSON.parse(localStorage.getItem("task"));
    var list_id = document.getElementById('task-list');
    var count = 0
    get_data_from_db.forEach(data => {
        console.log(data)
        count += 1
        list_id.innerHTML += `
         <tr>
            <td>${count}</td>
            <td>${data.task} </td> 
            <td>${data.date_created}</td>
            <td><button type="submit" data-edit="edit-task" id=${count - 1}  onclick="showModal(event); editTask(this.id)">Edit</button> <button class="btn-bg-success" data-task-id="assign" id=${count - 1} type="button" onclick="showModal(event); getUsers();">Assign</button> </td>
        </tr>
         `;
    })
}
//displayTask()



function editTask(id) {
    var editTaskInput = document.getElementById('edit-task-name');
    var editTaskId = document.getElementById('task-id');
    var getTaskFromLocalstorage = JSON.parse(localStorage.getItem('task'))
    editTaskInput.value = getTaskFromLocalstorage[id].task;
    editTaskId.value = id;
}

function updateTask() {
    var updateTaskInput = document.getElementById('edit-task-name').value;
    var updateTaskId = document.getElementById('task-id').value;
    var getTaskFromLocalstorage = JSON.parse(localStorage.getItem('task'));
    console.log(getTaskFromLocalstorage)
    getTaskFromLocalstorage[updateTaskId].task = updateTaskInput;
    getTaskFromLocalstorage[updateTaskId].date_created = new Date().toDateString();

    localStorage.setItem("task", JSON.stringify(getTaskFromLocalstorage))
    location.reload(true)
}


function getUsers() {
    const getUsers = JSON.parse(localStorage.getItem("staff_data"));
    const listOfUsers = document.querySelector("#list-of-users");

    // Get users from  localStorage and display them 
    getUsers.forEach((user, index) => {
        listOfUsers.innerHTML += `
        <li><input type="checkbox" id=${index} onchange="pushUser(this)"> ${user.full_name}</li>
    `;
    })
}


function pushUser(user) {
    const getUsers = JSON.parse(localStorage.getItem("staff_data"));
    const checkbox_arr = [];
    if(user.checked == true) {
        checkbox_arr.push(getUsers[user.id].full_name)
    } else if(user.checked == false) {
        checkbox_arr.splice(checkbox_arr.indexOf(getUsers[user.id].full_name, 1));
    }
    console.log(checkbox_arr)
    return checkbox_arr;
}

function assignUser(user) {
    const assignTask = document.querySelector("#assign-task");
}