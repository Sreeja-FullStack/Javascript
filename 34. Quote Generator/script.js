let quote = document.querySelector(".quote")
let btn1 = document.querySelector(".btn")
let btn2 = document.querySelector(".tweetbtn")
let author = document.querySelector(".author")
const api_url = "https://api.quotable.io/random";

btn1.addEventListener("click", getQuote(api_url))
btn2.addEventListener("click", tweet())

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);  // Logs the quote to the console
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);  // Call function immediately

function tweet(){
    window.open(href="https://twitter.com/intent/tweet?text=" + 
        quote.innerHTML + "---- By" + author.innerHTML,
        "Tweet Window", "width= 600, height =300");
}


