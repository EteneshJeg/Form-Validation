let email = document.forms['form']['email'];
let password = document.forms['form']['password'];

email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',pass_Verify);


function validated() {
    if(email.value.length < 9) {
        email.style.border = "3px solid red";
        email.focus();
        return false;
    }
    if(password.value.length < 9) {
        password.style.border = "3px solid red"; 
        password.style.background = "1px solid #FCE9EF";
        password.focus();
        return false;
    }
}
function email_Verify() {
    if(email.value.length >= 8) {
        email.style.border = "1px solid silver";
        return true;
    }
}
function pass_Verify() {
    if(password.value.length >= 5) {
        password.style.border = "1px solid silver";
        return true;
    }
}






















//for hide/show password

// const passwordEl = document.querySelector(".password");
// const eyeButton = document.querySelector(".fa");
// let isPass = true;

// function togglePass() {
//     if(isPass) {
//         passwordEl.setAttribute("type","text");
//         eyeButton.classList.remove("fa-eye-slash");
//         eyeButton.classList.add("fa-eye");
//         isPass =false;
//     }
//     else {
//         passwordEl.setAttribute("type", "password");
//         eyeButton.classList.remove("fa-eye");
//         eyeButton.classList.add("fa-eye-slash");
//         isPass = true;
//     }
// }