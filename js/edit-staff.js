var editStaffBtn = document.querySelector('[data-staff]');
var full_name_input = document.getElementById('edit-staff-fullname');
var email_input = document.getElementById('edit-staff-email');
var address_input = document.getElementById('edit-staff-address');
var contact_input = document.getElementById('edit-staff-phone-number');
var DOB_input = document.getElementById('edit-staff-dob');
var staff_id = document.getElementById('edit-staff-id');
var staff_data = JSON.parse(localStorage.getItem('staff_data'));
var button_id = "";
// buttons.forEach(button =>{
//     button.addEventListener('click', function(event){
//         button_id = event.target.id;
//         editStaff(button_id)
//         console.log('hmmmm', button_id)
//     })
//     console.log("me :",button_id)
// })
let my_id = 0;
editStaffBtn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("HHey", e.target.id)
    my_id = e.target.id;
    //editStaff(target.id);
    // if(target.getAttribute("data-staff") == "edit-staff") {
    //     editStaff(target.id);
    // }
})

console.log(my_id)
function editStaff(id){
    console.log("Staff id: ",id)
    staff_id.value = id+1;
    full_name_input.value = staff_data[id].full_name;
    email_input.value = staff_data[id].email;
    address_input.value = staff_data[id].address;
    contact_input.value = staff_data[id].phone;
    DOB_input.value = staff_data[id].dob;
}



function updateStaff(){
    console.log("Home :", button_id)
    staff_data[button_id].full_name = full_name_input.value;
    staff_data[button_id].email = email_input.value;
    staff_data[button_id].address = address_input.value;
    staff_data[button_id].phone = contact_input.value;
    staff_data[button_id].dob = DOB_input.value;

   

    localStorage.setItem('staff_data', JSON.stringify(staff_data));
}

document.getElementById('update-staff').addEventListener('click', function(event){
    event.preventDefault()
    updateStaff()
})