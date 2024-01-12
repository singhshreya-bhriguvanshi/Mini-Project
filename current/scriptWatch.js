// let time =new Date();
let tz = localStorage.getItem("timezone");
// console.log(date1);
// console.log(typeof (tz));
// console.log(tz);
// console.log(typeof(tz))


function update() {
  let time = new Date().toLocaleString("en-US", { timeZone: tz });
  let date1 = new Date(time);
  let date2 = new Date();
  // console.log(date2);
  document.getElementById("tzone").innerHTML=tz;
  document.getElementById("timeHour").innerHTML = date1.getHours();
  document.getElementById("timeMin").innerHTML = date1.getMinutes();
  let sec2=date1.getSeconds();
  // console.log(sec2);
  
  let hour2 = date1.getHours();
  // console.log(hour2);
  let min2 = date1.getMinutes();
  // console.log(min2);
  // console.log(hour2);
  if (hour2 < 12) {
    // console.log("AM");
    document.getElementById("ampm").innerText = " AM";
  } else {
    // console.log("PM");
    document.getElementById("ampm").innerText = " PM";
  }
  if (min2 < 10) {
    document.getElementById("timeMin").innerText = "0" + min2;
  } else {
    document.getElementById("timeMin").innerText = min2;
  }
  // let hour2=new Date().getHours();
  if (hour2 < 10) {
    document.getElementById("timeHour").innerText = "0" + hour2;
  } else {
    document.getElementById("timeHour").innerText = hour2;
  }


  if (hour2 < 12) {

    document.getElementById("ampm").innerText = ' AM';
  }
  else {

    document.getElementById("ampm").innerText = ' PM';
  }
  if (min2 < 10) {
    document.getElementById('timeMin').innerText = "0" + min2;
  }
  else {
    document.getElementById('timeMin').innerText = min2;
  }

  if (hour2 < 10) {
    document.getElementById('timeHour').innerText = "0" + hour2;
  }
  else {
    document.getElementById('timeHour').innerText = hour2;
  }
}
interval = setInterval(update, 1000);
