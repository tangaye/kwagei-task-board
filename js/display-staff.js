var staff_body_table = document.querySelector('.display_staff');
var staffs = JSON.parse(localStorage.getItem('staff_data'));

console.log(staffs)

// Loop through staff array
var markup = "";
for (count = 0; count < staffs.length; count++) {

    // Add staff to table body

    markup += ` 		

        <tr>
            <td>${count+1}</td>
            <td>${staffs[count].full_name}</td>
            <td>${staffs[count].email}</td>
            <td>${staffs[count].address}</td>
            <td>${staffs[count].phone}</td>
            <td>${staffs[count].dob}</td>
            <td>${staffs[count].profile_pic}</td>
            <td><a href="edit-staff.html" target="_blank"><button type="submit" data-staff="edit-staff" id="${count}">Edit</button></a></td>
            <td><a href="#"><button button="submit" id="${count}" delete-data="delete">Delete</button></a></td>

        </tr>`;
}



staff_body_table.insertAdjacentHTML('beforeend', markup);