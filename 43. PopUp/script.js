let btn = document.querySelector("button")
let ok = document.querySelector(".ok")
let popup = document.querySelector(".popup")

btn.addEventListener("click", () =>{
    popup.classList.add("show")
    btn.style.display = "none"
    
})
ok.addEventListener("click", () =>{
    popup.classList.remove("show")
    // popup.style.animation = "fadeIn 0.5s ease forwards"
    btn.style.display = "block"
    
})