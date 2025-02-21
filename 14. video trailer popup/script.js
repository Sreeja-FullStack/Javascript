let btn = document.querySelector(".btn")
let closeIcon = document.querySelector(".close-icon")
let imgContainer = document.querySelector(".image-container")
let trailer  = document.querySelector(".trailer-container")
let video = document.querySelector("video")

btn.addEventListener("click",() =>{
    trailer.classList.remove("active")
})

closeIcon.addEventListener("click", () =>{
    trailer.classList.add("active")
    video.pause();
    video.currentTime = 0;
})
