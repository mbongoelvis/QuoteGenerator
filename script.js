const quote = document.querySelector(".quote");
const quoteid = document.querySelector(".quoteid");
const nextButton = document.querySelector(".button");
const API = "https://api.adviceslip.com/advice";

async function fetchQuote() {
  try {
    const timestamp = Date.now();
    const url = `${API}?t=${timestamp}`;
    const response = await fetch(url);
    const data = await response.json();
    quote.textContent = data.slip.advice;
    quoteid.textContent = data.slip.id;
  } catch (error) {
    console.log(error.message);
  }
}

nextButton.addEventListener("click", fetchQuote);
