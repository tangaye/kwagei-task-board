var buttons = document.querySelectorAll('buttons');
var full_name_input = document.getElementById('edit-staff-fullname');
var email_input = document.getElementById('edit-staff-email');
var address_input = document.getElementById('edit-staff-address');
var contact_input = document.getElementById('edit-staff-phone-number');
var DOB_input = document.getElementById('edit-staff-dob');
var staff_id = document.getElementById('edit-staff-id')

buttons.addEventListener('click', function(event) {
    console.log(event.target.id);
    full_name_input = '';
    email_input = '';
    address_input = '';
    contact_input = '';
    DOB_input = '';
})