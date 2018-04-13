var quotes = [
  'make the world a better place',
  'build something',
  'create stuff',
  'develop something',
  'start this party',
  'create change',
  'be better',
  'be kind to eachother',
  'fix this mess', 
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementByID'quoteDisplay').innerHTML = quotes[randomNumber];
}
