var quotes = [
  "When you have a dream, you've got to grab it and never let go.",
  "Nothing is impossible. The word itself says 'I'm possible!",
  "There is nothing impossible to they who will try.",
  "The bad news is time flies. The good news is you're the pilot.",
  "Life has got all those twists and turns. You've got to hold on tight and off you go.",
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
  "You define your own life. Don't let other people write your script.",
  "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  "The road to success and the road to failure are almost exactly the same.",
  "It is often the small steps, not the giant leaps, that bring about the most lasting change.",
  "Education is the most powerful weapon which you can use to change the world.",
  "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
  "If you want to lift yourself up, lift up someone else.",
  "I have learned not to allow rejection to move me.",
  "I scorched the earth with my talent and I let my light shine.",
];
var c = 1;
var len = quotes.length;
var a = document.querySelector("#quotation");
// console.log(a);
// a.addEventListener("click", function () {
// if (c == 4) {
//     c = 0;
//   }
//   console.log(quotes[c]);
//   a.innerHTML = quotes[c];
//   c++;
// });

function change() {
  if (c == len) {
    c = 0;
  }
  console.log(quotes[c]);
  a.innerHTML = '"' + quotes[c] + '"';
  c++;
}

var myTimer = setInterval(change, 10000);
a.addEventListener("mouseover", function () {
  clearInterval(myTimer);
});

a.addEventListener("mouseout", function () {
  myTimer = setInterval(change, 10000);
});
