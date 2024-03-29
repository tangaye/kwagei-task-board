var staff_arr = JSON.parse(localStorage.getItem("staff_data"));
var full_name = document.getElementById('fullname');
var email = document.getElementById('email');
var address = document.getElementById('address');
var phone = document.getElementById('phone');
var date_of_birth = document.getElementById('dob');
var profile_pic = document.getElementById('profile');
var submit_btn = document.getElementById('submit_btn');

// Event listener for submit button
submit_btn.addEventListener('click', function () {

    // Create staff
    createStaff({
        full_name: full_name.value,
        email: email.value,
        address: address.value,
        phone: phone.value,
        dob: date_of_birth.value,
        profile_pic: profile_pic.value
    });

    // Clear staff form
    clearStaffForm();

});


/**
 * Stores user input in local storage when the submit button is clicked
 * @param {Object} staff_obj - Object containing staff details
 */
function createStaff(staff_obj) {

    staff_arr.push(staff_obj);

    localStorage.setItem('staff_data', JSON.stringify(staff_arr));
}

// function to clear input element after clicking create button
function clearStaffForm() {
    full_name.value = '';
    email.value = '';
    address.value = '';
    phone.value = '';
    date_of_birth.value = '';
    profile_pic.value = '';
}