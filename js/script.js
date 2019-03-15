/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*
An array is created with 5 quote objects.
each quote object has the properties: quote, source, citation and year.
*/
const quotes = [
  // quote 1
  {
    quote: "I’m the Dude, so that’s what you call me. That or, uh His Dudeness, or uh Duder, or El Duderino, if you’re not into the whole brevity thing.",
    source: "The Dude",
    citation: "The Big Lebowski",
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
    citation: "The Big Lebowski",
    year: 1998,
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
    year: 1998,
  }
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {

}




/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
