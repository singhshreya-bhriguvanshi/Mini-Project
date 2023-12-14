// let time =new Date();

function update(){
document.getElementById("timeHour").innerHTML= new Date().getHours();
  document.getElementById("timeSec").innerHTML=new Date().getSeconds ();  
  document.getElementById("timeMin").innerHTML=new Date().getMinutes();
  console.log("Hello")
  // setInterval(update,1000);
}
interval = setInterval(update,1000);