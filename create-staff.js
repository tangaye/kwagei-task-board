var staff_arr = [];
var full_name = document.getElementById('fullname');
var email = document.getElementById('email');
var address = document.getElementById('address');
var phone = document.getElementById('phone');
var date_of_birth = document.getElementById('dob');
var profile_pic = document.getElementById('profile');

// Event listener for submit button
document.getElementById('submit_btn').addEventListener('click', function () {

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

})



/**
 * Want to get user input and store it in local storage when the submit button is clicked
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