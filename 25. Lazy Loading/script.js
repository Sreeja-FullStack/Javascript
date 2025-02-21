let background = document.querySelector(".background")
let loadingText = document.querySelector(".loading-text")

let load = 0;
let int = setInterval(blurring, 30);

function blurring(){
    load++;

  if (load > 99) {
    clearInterval(int);
  }

    loadingText.innerText = `${load}%`
    // loadingText.style.opacity = scale(load, 0, 100, 0, 10);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

// let background = document.querySelector('.background');
// let loadingText = document.querySelector('.loading-text');
// let load = 0;

// let interval = setInterval(function () {
//     load++;
//     loadingText.innerText = `Loading... ${load}%`;
//     background.style.filter = `blur(${30 - (load / 100) * 30}px)`; // Gradually reduce blur

//     if (load === 100) {
//         clearInterval(interval);
//         loadingText.innerText = 'Completed!';
//     }
// }, 30);
