// let time =new Date();

function update() {
  document.getElementById("timeHour").innerHTML = new Date().getHours();
  // document.getElementById("timeSec").innerHTML=new Date().getSeconds ();
  document.getElementById("timeMin").innerHTML = new Date().getMinutes();
  // console.log("Hello")
  // setInterval(update,1000);
  let hour2 = new Date().getHours();
  let min2 = new Date().getMinutes();
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
    hour2document.getElementById("timeHour").innerText = hour2;
  }
}
interval = setInterval(update, 1000);
