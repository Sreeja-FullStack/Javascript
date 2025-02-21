let redHeart = document.querySelector(".red-heart")
let grayHeart = document.querySelector(".gray-heart")

grayHeart.addEventListener("click", () =>{
    redHeart.classList.add("animation")
    grayHeart.classList.add("fill-color")
})

redHeart.addEventListener("click", () =>{
    redHeart.classList.remove("animation")
    grayHeart.classList.remove("fill-color")
})