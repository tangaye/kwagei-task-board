var data_from_db = JSON.parse(localStorage.getItem('task'));
var list_id = document.getElementById('task-list');

/*
*@param displayTask - A function that takes in an array of objects and render it dynamically to the page
*/
function displayTask(datas) {
    var count = 0
     datas.forEach(data => {
        count += 1
         list_id.innerHTML += `
         <tr>
            <td>${count}</td>
            <td>${data.task} </td> 
            <td>${data.date_created}</td>
            <td><a id=${count-1} href="edit-task.html" target="_blank"><button type="button">Edit</button></a>
        </tr>
         `;
     })
}

displayTask(data_from_db)