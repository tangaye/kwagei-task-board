var data_from_db = JSON.parse(localStorage.getItem('task'));
var list_id = document.getElementById('task-list');

/*
*@param displayTask - A function that takes in an array of objects and render it dynamically to the page
*/
function displayTask(datas) {
     datas.forEach(data => {
         list_id.innerHTML += `
            <li>${data.task} <br> <span> ${data.date_created}</span></li>
         `;
     })
}

displayTask(data_from_db)