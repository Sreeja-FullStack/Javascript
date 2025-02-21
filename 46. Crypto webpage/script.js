const bitcoin = document.querySelector('#bitcoin');
const ethereum = document.querySelector('#ethereum');
const dogecoin = document.querySelector('#dogecoin');

fetch('https://api.coincap.io/v2/assets')
.then(data => data.json())
.then(data => {
    const bitcoinValue = data.data.filter(i => i.name === 'Bitcoin')[0].priceUsd.toString().substring(0, 8);
    const ethereumValue = data.data.filter(i => i.name === 'Ethereum')[0].priceUsd.toString().substring(0, 8);
    const dogecoinValue = data.data.filter(i => i.name === 'Dogecoin')[0].priceUsd.toString().substring(0, 8);
    bitcoin.textContent = "$" + bitcoinValue;
    ethereum.textContent = "$" + ethereumValue;
    dogecoin.textContent = "$" + dogecoinValue
})
.catch(error => {
    console.error("Error fetching the data: ", error);
});


// second method using ajax
let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
    bitcoin.innerHTML = response.bitcoin.usd;
    ethereum.innerHTML = response.ethereum.usd;
    dogecoin.innerHTML = response.dogecoin.usd;
}).fail(function(jqXHR, textStatus, errorThrown) {
    console.error("Error fetching data: " + textStatus + " - " + errorThrown);
});
