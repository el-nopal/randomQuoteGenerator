/*
An array is created with 5 quote objects.
each quote object has the properties: quote, source, citation and year.
*/
const quotes = [
  // quote 1
  {
    quote: "I’m the Dude, so that’s what you call me. That or, uh His Dudeness, or uh Duder, or El Duderino, if you’re not into the whole brevity thing.",
    source: "The Dude",
    // citation: "The Big Lebowski",
    year: 1998,
  },
  // quote 2
  {
    quote: "I am the Walrus.",
    source: "Donny",
    citation: "The Big Lebowski",
    year: 1998,
  },
  // quote 3
  {
    quote: "The Dude abides.",
    source: "The Dude",
    // citation: "The Big Lebowski",
    // year: 1998,
    tag: "wisdom",
  },
  // quote 4
  {
    quote: "That rug really tied the room together.",
    source: "Walter Sobchak",
    citation: "The Big Lebowski",
    year: 1998,
  },
  //  quote 5
  {
    quote: "Obviously you’re not a golfer.",
    source: "The Dude",
    citation: "The Big Lebowski",
    // year: 1998,
    tag: "golfing",
  }
];

/*
the function getRandomQuote has a variable that picks a random number out of the amount of quotes.
it uses math.floor to round down the random number from math.random since it comes out as weird decimals like 0.68768
then multiply the amount of quotes from .length
last, to make it a reusable function, i call returned the value
quotes[randomNumber] is box notation. the array and the index value
*/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/*
i called the randomquote and made it into a variable.
i made  variable to create the html.
with dot notation, i combined the random quote variable with the object property
to get all the info.
if/else was used in case there was no value.
last, i targeted the id to put the variable postQuote to into html
*/
var intervalID = window.setInterval(printQuote, 9000);

function printQuote() {
  let quote = getRandomQuote();
  let postQuote = '<p class="quote">' + quote.quote + '</p>' + '<p class="source">' + quote.source;
  if (quote.citation) {
    postQuote += '<span class="citation">' + quote.citation + '</span>';
  } else {
      postQuote += '';
  }
  if (quote.year) {
    postQuote += '<span class="year">' + quote.year + '</span>';
  } else {
    postQuote += '';
  }
  if (quote.tag) {
    postQuote += '<span class="year">' + quote.tag + '</span>' + '</p>';
  } else {
    postQuote += '';
  }

  document.getElementById('quote-box').innerHTML = postQuote;

}

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
