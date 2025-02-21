let switcher = document.querySelector("#switch");

switcher.addEventListener("click", () =>{
    // if(switcher.checked === true){
    // document.body.style.background = "#000000"
    // } else{
    //     document.body.style.background = "#ffffff"
    // }

    (switcher.checked)?
    document.body.style.background = "#000000":
    document.body.style.background = "#ffffff"
})