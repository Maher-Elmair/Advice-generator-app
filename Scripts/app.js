const btn = document.querySelector("button");
const id = document.querySelector(".number-quote");
const quote = document.querySelector(".quote");

function loadQuote() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response.slip);
            id.innerHTML = `Advice #${response.slip.id}`;
            quote.innerHTML = `&#8220${response.slip.advice}&#8221`;
        });
}

btn.addEventListener("click", loadQuote);

document.addEventListener("DOMContentLoaded", loadQuote);
