let selecText = document.querySelector("#selectText");
let selectField = document.querySelector("#selectField");
let list = document.querySelector("#list");
let options = document.querySelectorAll("#list .options"); // Make sure options are correctly selected
let arrow = document.querySelector("#arrow-icon");


// let selectField = document.getElementById("selectField");
// let selectText = document.getElementById("selectText");
// let list = document.getElementById("list");
// let arrowIcon = document.getElementById("arrowIcon");
// let options = document.getElementsByClassName("options");


selectField.addEventListener("click", () => {
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
});

options.forEach(option => {
    option.onclick = function () {
        selecText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");
    };
});
