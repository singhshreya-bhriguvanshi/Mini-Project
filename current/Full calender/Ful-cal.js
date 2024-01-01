var dt = new Date();
function backbtn(){
  window.location("../../current/index.html");
}
function renderDate() {
  dt.setDate(1);
  document.querySelector("#date_str").innerText = dt.getFullYear();
  var monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector("#mon-name").innerText = monthName[dt.getMonth()];
  var startDay = dt.getDay();
  var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
  var lastDate = endDate.getDate();
  var endDay = endDate.getDay();
  var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  var today = new Date();
  console.log(today);

  //for printing dates in the calender
  var dateDiv = "";
  for (var i = startDay; i > 0; i--) {
    dateDiv += "<div class='grey'>" + (prevDate - i + 1) + "</div>";
  }
  for (i = 1; i <= lastDate; i++) {
    if (
      i == today.getDate() &&
      today.getMonth() == dt.getMonth() &&
      today.getFullYear() == dt.getFullYear()
    ) {
      dateDiv += "<div class='hov today' >" + i + "</div>";
    } else {
      dateDiv += "<div class='hov'>" + i + "</div>";
    }
  }
  for (i = endDay, j = 1; i < 6; i++, j++) {
    dateDiv += "<div class='grey'>" + j + "</div>";
  }

  document.getElementsByClassName("dayss")[0].innerHTML = dateDiv;
}

function moveDate(para) {
  if (para == "prev") {
    dt.setMonth(dt.getMonth() - 1);
    renderDate();
  } else if (para == "next") {
    dt.setMonth(dt.getMonth() + 1);
    renderDate();
  }
}

var e = document.querySelector("#end");
console.log(end);
end.addEventListener("click", function () {
  window.location.href = "../index.html";
});

addEventListener("DOMContentLoaded", function () {
  var p = document.querySelector("#date_str");
  var inputField = document.querySelector("#input-field");

  p.addEventListener("click", function () {
    // Show the input field
    inputField.style.display = "block";

    // Focus on the input field
    inputField.focus();
    p.style.display = "none";
  });

  inputField.addEventListener("input", function () {
    if (this.value.length == 4) {
      var userInput = this.value; // Get the current value of the input field
      inputField.style.display = "none";
      p.style.display = "block";
    }
    if (userInput < 1980) {
      userInput = 1980; // Get the current value of the input field
    } else if (userInput > 2100) {
      userInput = 2100; // Get the current value of the input field
    }
    dt.setFullYear(userInput);
    renderDate();

    console.log("User input:", userInput); // Do something with the input
  });
});
