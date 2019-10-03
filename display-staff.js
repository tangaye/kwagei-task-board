var staffTableBody = document.querySelector('.staff-table-body');
var staffs = JSON.parse(localStorage.getItem('staff_data'));



// Loop through staff array
for(count = 0; count< staffs.length; count ++){

    // Add staff to table body

    staffTableBody.insertAdjacentElement('beforeend', `
        <tr>
            <td>${staffs[count].full_name}</td>
            <td>${staffs[count].address}</td>
            <td>${staffs[count].email}</td>
            <td>${staffs[count].dob}</td>
            <td>${staffs[count].phone}</td>
            <td>${staffs[count].profile_pic}</td>
        </tr>
    `)
   
}