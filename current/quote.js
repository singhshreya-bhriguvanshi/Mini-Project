var quotation = document.querySelector("#quotation");

async function getQuotes() {
  var quotes = `https://api.quotable.io/random?maxLength=150`;
  // var quotes = "https://api.humorapi.com/jokes/search";
  //   var c = 1;

  try {
    let data = await fetch(quotes);
    let quote = await data.json();
    // var rn = Math.floor(Math.ramdom() * quote.length);
    quotation.innerHTML = quote.content;
    // author.innerHTML = quote.author;

    console.log(quotes);
  } catch (error) {}
}

// function change() {}
var myTimer = setInterval(getQuotes, 10000);

quotation.addEventListener("mouseover", function () {
  clearInterval(myTimer);
});

quotation.addEventListener("mouseout", function () {
  myTimer = setInterval(getQuotes, 10000);
});
