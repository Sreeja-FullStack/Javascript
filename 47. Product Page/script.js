let switch1 = document.querySelector(".switch-1")
let switch2 = document.querySelector(".switch-2")
let switch3 = document.querySelector(".switch-3")
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")

switch1.addEventListener("click", ()=>{
    img1.textContent = "img/product.png"
    img1.style.display = "block"
    img2.style.display = "none"
    img3.style.display = "none"
    switch1.style.background ="black" 
    switch2.style.background ="gray" 
    switch3.style.background = "gray"    
})
switch2.addEventListener("click", ()=>{
    img1.style.display = "none"
    img2.style.display = "block"
    img3.style.display = "none"
    switch2.style.background ="black" 
    switch1.style.background ="gray" 
    switch3.style.background = "gray" 
})
switch3.addEventListener("click", ()=>{
    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "block"
    switch3.style.background ="black" 
    switch2.style.background ="gray" 
    switch1.style.background ="gray" 
    
})
