let switcher = document.querySelector(".switch")
let slide = document.querySelector(".slider")
let body = document.querySelector("body")
let head = document.querySelector("h1")

if(localStorage.getItem('theme')=== 'dark'){
    body.style.background= "#000000"
    slide.style.background= "#ffffff"
    head.style.color = "#f3904f"
    
} else {
    body.style.background = "#ffffff"
    slide.style.background = "#000000"
    head.style.color = "#f3904f"
    
}

slide.addEventListener("click", () => {
    if(body.style.background === "rgb(0, 0, 0)"){
        body.style.background = "#ffffff"
        slide.style.background = "#000000"
        head.style.color = "#f3904f"
        localStorage.setItem("theme", 'light')
    } else {
        body.style.background= "#000000"
        slide.style.background= "#ffffff"
        head.style.color = "#ffffff"
        localStorage.setItem("theme", 'dark')
    }
})


