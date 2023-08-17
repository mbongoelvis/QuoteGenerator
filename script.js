const quote = document.querySelector(".quote");
const quoteid = document.querySelector(".quoteid");
const nextButton = document.querySelector(".button");
const API = "https://api.adviceslip.com/advice";

const fetchQuote = () => {
  // Clear previous quote
  quote.textContent = "";
  quoteid.textContent = "";

  setInterval(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        quote.textContent = data.slip.advice;
        quoteid.textContent = data.slip.id;
      })
      .catch((error) => {
        alert(error.message);
      });
  }, 10);
};

nextButton.addEventListener("click", fetchQuote);