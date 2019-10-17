var staff_body_table = document.querySelector('.display_staff');
var staffs = JSON.parse(localStorage.getItem('staff_data'));


// Loop through staff array
for (count = 0; count < staffs.length; count++) {

    // Add staff to table body

    var markup = `
        <tr>
            <td>${count+1}</td>
            <td>${staffs[count].full_name}</td>
            <td>${staffs[count].email}</td>
            <td>${staffs[count].address}</td>
            <td>${staffs[count].phone}</td>
            <td>${staffs[count].dob}</td>
            <td>${staffs[count].profile_pic}</td>
            <td><button   ><a href="edit-staff.html" target="_blank" id="${count}">Edit</a></button>
        </tr>`;
}

staff_body_table.insertAdjacentHTML('beforeend', markup);