let min = document.querySelector(".minutes")
let sec = document.querySelector(".seconds")
let milli = document.querySelector(".milliseconds")
let startBtn = document.querySelector(".start")
let stopBtn = document.querySelector(".stop")
let resetBtn = document.querySelector(".reset")

let timer;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;


startBtn.addEventListener("click", ()=>{
    startTimer();    
})

stopBtn.addEventListener("click", () =>{
    clearInterval(timer);
    startBtn.disabled = false;
    stopBtn.disabled = true;  
})

resetBtn.addEventListener("click", () =>{
    clearInterval(timer);
    minutes = 0;
    seconds= 0;
    milliSeconds= 0;
    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

function startTimer(){
    startBtn.disabled = true;
    stopBtn.disabled = false;

    timer = setInterval(() => {
        milliSeconds++;
        if(milliSeconds >= 100){
            milliSeconds = 0
            seconds++;
        }
        if(seconds >= 60){
            seconds=0;
            minutes++;
        }
        updateDisplay();
    }, 10);
}

function updateDisplay(){
    min.textContent = formatTime(minutes);
    sec.textContent = formatTime(seconds);
    milli.textContent = formatTime(milliSeconds);
}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}

