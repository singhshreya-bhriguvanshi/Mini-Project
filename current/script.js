function openCal() {
  var modal = document.getElementById("myModal");
  var iframe = document.getElementById("appIframe");
  iframe.src = "Full calender/Ful-cal.html"; 
  modal.style.display = "block";
}

function closeCal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}



document.addEventListener("DOMContentLoaded", function () {

    const userName = localStorage.getItem('userName');
    const usernameDisplay = document.getElementById('usernamedisplay');
  
    if (userName) {
        usernamedisplay.textContent = userName;
    }

  // form
  // document.querySelector("form").addEventListener("submit", function (event) {
  //   event.preventDefault();

  //   var userName = document.getElementById("userName").value;
  //   var cityName = document.getElementById("cityName").value;

  //   if (userName.trim() !== "" && cityName.trim() !== "") {
  //     var formContainer = document.querySelector('.form-container');
  //     formContainer.style.display = "none";

  //     const usernameDisplay = document.getElementById('usernamedisplay');
  //     if (userName) {
  //       usernamedisplay.textContent = userName;
  //     }
  //   }
  // });

  
  // let  cityLoc1 =document.getElementById("cityName").value;
  // localStorage.setItem("city",cityLoc1);


  // calender

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

