var buttons = document.querySelectorAll('button');
var full_name_input = document.getElementById('edit-staff-fullname');
var email_input = document.getElementById('edit-staff-email');
var address_input = document.getElementById('edit-staff-address');
var contact_input = document.getElementById('edit-staff-phone-number');
var DOB_input = document.getElementById('edit-staff-dob');
// var staff_id = document.getElementById('edit-staff-id')

buttons.forEach(button =>{
    button.addEventListener('click', function(event){
        console.log(event.target.id);
        var staff_id = event.target.id;
        var staff_data = localStorage.getItem('staff_data');
        console.log(staff_data);
        full_name_input = staff_data[staff_id].full_name ;
        email_input = staff_data[staff_id].email;
        address_input = staff_data[staff_id].address;
        contact_input = staff_data[staff_id].contact;
        DOB_input = staff_data[staff_id].dob;
    })
})