var user_detailts = [];
var sign_user_name_input = document.getElementById('signusername');
var sign_password_input = document.getElementById('signpassword');
var login_user_name_input = document.getElementById('loginusername');
var loogin_password_input = document.getElementById('loginpassword');
var users_details = JSON.parse(localStorage.getItem('User-Details'));
var login = document.getElementById('login_container');
var sign_in = document.getElementById('sign-up_container');

document.getElementById('login1').addEventListener('click', function(){
    login.style.display = 'block';
    sign_in.style.display = 'none';
})

document.getElementById('signin1').addEventListener('click', function(){
    login.style.display = 'none';
    sign_in.style.display = 'block';
})

document.getElementById('login2').addEventListener('click', function(){
    login.style.display = 'block';
    sign_in.style.display = 'none';
})

document.getElementById('signin2').addEventListener('click', function(){
    login.style.display = 'none';
    sign_in.style.display = 'block';
})

function signIn(){
    user_info = {
        user_name: sign_user_name_input.value,
        passwors: sign_password_input.value
    }
    user_detailts.push(user_info);
    localStorage.setItem('User-Details', JSON.stringify( user_detailts));
}

document.getElementById('loginButton').addEventListener('click', function(event){
    console.log(event)
    console.log(users_details);
    // for(count = 0; count<users_details.length; count++);
    // {
    //     if(login_user_name_input == users_details[count].user_name){
    //         console.log('hello');
    //     }
    //     else{
    //         alert('usernmae donot exit');
    //     }
    // }
})