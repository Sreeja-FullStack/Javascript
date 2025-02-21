let indicator = document.querySelector(".scroll-indicator .progress")

let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener("scroll", scroll)

function scroll(){
    let scrollTop = document.documentElement.scrollTop
    let scrolled = (scrollTop/scrollHeight)*100
    indicator.style.width = `${scrolled}%`
}



/* * {
    margin: 0;
    padding: 0;
  }
  
  body {
    height: 100vh;
    font-family: sans-serif;
    background: #000;
    color: #fff;
  }
  
  .content {
    padding: 4rem;
  }
  
  section {
    border: 2px solid white;
    margin: 20px 0;
    padding: 20px;
  }
  
  section h1 {
    margin: 10px 0;
  }
  
  .scroll-indicator {
    height: 5px;
    width: calc(100% - 6em);
    position: fixed;
    top: 10px;
    left: 3em;
    border-radius: 3px;
  }
  
  .scroll-indicator .progress {
    height: 100%;
    width: 0;
    border-radius: 3px;
    /* https://www.grabient.com/ */
    /* background: linear-gradient(30deg, #21d4fd, #b721ff);
    transition: width 0.1s;
  } **/