function openSetting() {
  var modal = document.getElementById("myModal");
  var iframe = document.getElementById("appIframe");
  iframe.src = "Settingss/setting.html"; 
  modal.style.display = "block";
}

function closeSetting() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

 function saveData(){
  let tz= document.getElementById("timezone").value;
  localStorage.setItem("timezone",tz);
  let  cityLoc =document.getElementById("city").value;
  localStorage.setItem("city",cityLoc);
 
  document.getElementById("save").addEventListener("click",redirect);
}

function redirect(){
  window.location="../index.html";
}