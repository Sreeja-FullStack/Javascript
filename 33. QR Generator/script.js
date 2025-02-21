let btn = document.querySelector(".btn")
let input = document.querySelector("#input")
let qr = document.querySelector(".qr")
let qrImg = document.querySelector("#qrImg")


btn.addEventListener("click", function generateQr(){
    if(input.value.length > 0){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    qr.classList.add("show-img")
    } else{
        input.classList.add("error")
        setTimeout(()=>{
            input.classList.remove("error")
        },1000)
    }
})