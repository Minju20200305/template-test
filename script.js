const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
// const newQuote = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

/*let을 사용하는 이유는 밑에서 value가 바뀌기 때문에 */

//Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//Hide Loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
//Show New Quote
function newQuote() {
  //pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get Quotes from API
async function getQuote() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
    /*json으로 바꾸는 부분*/
  } catch (error) {
    /* 에러 대답하는 부분*/
  }
}

//On Load//
getQuote();
loading();
