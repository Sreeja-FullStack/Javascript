let button = document.querySelector("#btn")
button.addEventListener("click", function(){
let num1 = document.querySelector(".num1").value;
let num2 = document.querySelector(".num2").value;
let result = document.querySelector(".result")
let operator = document.querySelector("#selectOp").value;

switch(operator){
case "+":
    result.innerHTML = Number(num1) + Number(num2);
    break;
case "-":
    result.innerHTML = num1 + num2
    break;
case "*":
    result.innerHTML = num1 + num2
    break;
case "/":
    result.innerHTML = num1 + num2
    break;

}});
