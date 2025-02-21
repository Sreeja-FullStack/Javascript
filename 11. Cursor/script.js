let cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", (e)=>{
    moveCursor(e.pageX, e.pageY)
})

function moveCursor(pageX, pageY){
    cursor.style.left = pageX + "px";
    cursor.style.top = pageY +"px"
}