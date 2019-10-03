var staff_arr = [], staff_obj;
var full_name, email, address, phone, DOB, profile_pic, submit_btn;


document.getElementById('submit_btn').addEventListener('click', function(){
    console.log('Clicked');
    
    getValueFromElements();
})

/**
 * Get values from the elements
 */
function getValueFromElements(){
    full_name = document.getElementById('fullname').value;
    email = document.getElementById('email').value;
    address = document.getElementById('address').value;
    phone = document.getElementById('phone').value;
    DOB = document.getElementById('dob').value;
    profile_pic = document.getElementById('profile').value;

    createStaff(full_name, email, address, phone, DOB, profile_pic);
}

/**
 * Want to get user input and store it in local storage when the submit button is clicked
 */
function createStaff(input_full_name, input_email, input_address, input_phone, input_DOB, input_profile_pic){
    staff_obj = {
        full_name: input_full_name,
        email: input_email,
        address: input_address,
        phone: input_phone,
        dob: input_DOB,
        profile_pic: input_profile_pic
    }

    staff_arr.push(staff_obj);
    localStorage.setItem("staff_data", JSON.stringify(staff_arr));
    return staff_arr;
}