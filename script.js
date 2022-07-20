const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuotBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];
console.log(apiQuotes);
/*let을 사용하는 이유는 밑에서 value가 바뀌기 때문에 */

// Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// //Hide Loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
//Show New Quote
function newQuote() {
  loading();
  //pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //저자가 블랭크면 'Unkwon'으로 바꾸기
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  //글 상자가 너무 크면 다시 크기 조정
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //set Quote, hide Loader
  quoteText.textContent = quote.text;
  complete();
}
// console.log(quote);
// Get Quotes from API
async function getQuotes() {
  loading();
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

//tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
  window.open(twitterUrl, "_blank");
}
//Event listener
newQuotBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
//On Load//
getQuotes();

// loading();
