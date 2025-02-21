let day = document.querySelector("#day")
let date = document.querySelector("#date")
let month = document.querySelector("#month")
let year = document.querySelector("#year")
const weekDays = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"]
const allMonths = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];
const today = new Date();

date.innerHTML = (today.getDate()<10 ? "0" : "" + today.getDate());
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();

console.log((today.getDate()<10?"0":"" + today.getDate()))


