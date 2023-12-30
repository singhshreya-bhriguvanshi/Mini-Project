 function saveData(){
  let tz= document.getElementById("timezone").value;
  localStorage.setItem("timezone",tz);
  let cityLoc=document.getElementById("city").value;
  localStorage.setItem("city",cityLoc);
  // console.log(city);
  // console.log(tz)
  document.getElementById("save").addEventListener("click",redirect);
}

function redirect(){
  window.location="../index.html";
}