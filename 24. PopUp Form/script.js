let openBtn = document.querySelector("#open")
let modal = document.querySelector("#modal")
let closeBtn = document.querySelector("#close")



openBtn.addEventListener("click", () => {
    // modal.classList.add("show-modal")
    modal.style.display= "block";
})
closeBtn.addEventListener("click", () => {
    // modal.classList.remove("show-model")
    modal.style.display = "none"
})

window.addEventListener("click", (e) => {
    // e.target === modal ? modal.classList.remove("show-modal") : false;
    e.target === modal ? modal.style.display = "none" : false;
  });
