let input = document.querySelector("input");
let eye = document.querySelector("#eye-icon");

eye.addEventListener("click", () =>{
    // if(input.type === 'password'){
    //     input.type = 'text';
    // }
    // else{
    //     input.type = 'password'
    // }
    input.type === 'password'? input.type = 'text' : input.type = 'password'
})