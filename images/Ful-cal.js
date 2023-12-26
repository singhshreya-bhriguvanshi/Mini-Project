var dt = new Date();

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
