document.addEventListener('DOMContentLoaded', function() {
  const userName = localStorage.getItem('userName');
  const usernameDisplay = document.getElementById('usernamedisplay');

  if (userName) {
      usernamedisplay.textContent = userName;
  }
});


let date =new  Date();
// console.log(date);
let month=date.getMonth()
// console.log(month);
let arrMonth = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
document.getElementById('Month1').innerHTML= arrMonth[month];
let dates= date.getDate();
document.getElementById('date1').innerHTML=dates;
 let day = date.getDay();
let arrDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
document.getElementById("Day1").innerHTML=arrDay[day];
let year=date.getFullYear();
document.getElementById("Year1").innerHTML=year;
// document.getElementById("btn").innerHTML

