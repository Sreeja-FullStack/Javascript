let password = document.getElementById("password");
let msg = document.getElementById("msg")
let str = document.getElementById("strength")
let eye = document.getElementById("eye")

// password.addEventListener("input", ()=>{
//     if(password.value.length > 0){
//         msg.style.display= "block";
//     }else{
//         msg.style.display = "none";
//     }
//     if(password.value.length < 4){
//         str.innerHTML = "Weak";
//     }else if(password.value.length >=4 && password.value.length < 8){
//         str.innerHTML = "Medium"
//     } else if(password.value.length >= 8 && password.value ){
//         str.innerHTML = "Strong"
//     }
// })

eye.addEventListener("click", () =>{
    password.type === "password"? password.type = 'text': password.type = 'password';
    // password.type === 'password'? password.type = 'text' : password.type = 'password'
    // password.type = (password.type === "password") ? "text" : "password";
})

function checkStrength(password){
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSplChar = /[!@#$%^&*()_+-=~`:;'"<>?|{}]/.test(password);

    if(password.length >=minLength && hasUpperCase && hasLowerCase && hasNumber && hasSplChar){
        return "Strong"
    }else if(password.length >= minLength){
        return "Medium"
    } else {
        return "Weak"
    }
}


password.addEventListener("input",()=>{
    const passwordValue = password.value;
    const strength = checkStrength(passwordValue);
    str.innerHTML = strength;
    msg.style.display= "block";
} )