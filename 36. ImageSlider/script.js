let scroller = document.querySelector(".gallery")
let backBtn = document.getElementById("backbtn")
let nextBtn = document.getElementById("nextbtn")

scroller.addEventListener("wheel", (e)=>{
    e.preventDefault();
    scroller.scrollLeft += e.deltaY;
    scroller.style.scrollBehavior = "auto";
})
nextBtn.addEventListener("click", ()=>{
    scroller.style.scrollBehavior = "smooth";
    scroller.scrollLeft +=900;
})
backBtn.addEventListener("click", ()=>{
    scroller.style.scrollBehavior = "smooth"
    scroller.scrollLeft -=900;
})
