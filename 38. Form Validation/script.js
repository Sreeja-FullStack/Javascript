let nameError = document.getElementById("name-error")
let lnameError = document.getElementById("lname-error")
let phoneError = document.getElementById("phone-error")
let emailError = document.getElementById("email-error")
let messageError = document.getElementById("msg-error")
let submitError = document.getElementById("submit-error")
let successMsg = document.querySelector(".success-msg");

function validateName(){
    let name = document.getElementById("contact-name").value;
    if(name.length < 3){
        nameError.innerHTML ="Name is required"
        return false;
    }
    if(!name.match(/^[A-Za-z]*[A-Za-z]*$/)){
        nameError.innerHTML="Write Full name";
        return false;
    }
    nameError.innerHTML ='<i class="fa fa-check-circle"></i>'
    return true;
}

document.getElementById("last-name").addEventListener("keyup", validateLastName);
document.getElementById("phone-num").addEventListener("keyup", validatePhone);
document.getElementById("email").addEventListener("keyup", validateEmail);
document.getElementById("msg").addEventListener("keyup", validateMessage);
// document.getElementById("form").addEventListener("keyup", validateMessage)

function validateLastName() {
    let lname = document.getElementById("last-name").value;
    if (lname.length === 0) {
        lnameError.innerHTML = "Last Name is required";
        return false;
    }
    if (!lname.match(/^[A-Za-z\s]+$/)) {
        lnameError.innerHTML = "Invalid Last name (only letters and spaces allowed)";
        return false;
    }
    lnameError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    let phone = document.getElementById("phone-num").value;

    if (phone.length === 0) {
        phoneError.innerHTML = "Phone Number is required";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone Number must be exactly 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Invalid Phone Number. Only digits allowed";
        return false;
    }
    phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById("email").value;

    if(email.length === 0){
        emailError.innerHTML = "Email is required"
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[a-zA-Z]{2,6}$/)){
        emailError.innerHTML = "Invalid email"
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}
function validateMessage(){
    let msg = document.getElementById("msg").value;

    if(msg.length < 2){
        messageError.innerHTML = "Message is required"
        return false;
    }
    messageError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();  // Prevent form submission
    let isValid = validateName() && validateLastName() && validatePhone() && validateEmail() && validateMessage();
    
    if (!isValid) {
        submitError.innerHTML = "Please fix the errors before submitting.";
    } else {
        submitError.innerHTML = ""; // Clear error message on successful validation
        document.querySelector("form").style.display = "none"; // Hide form
        // successMsg.style.display = "block"; // Show success message
        successMsg.classList.add("show")
    }
});