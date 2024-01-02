function openCalc() {
  var modal = document.getElementById("myModal");
  var iframe = document.getElementById("appIframe");
  iframe.src = "Calculator/calc.html"; 
  modal.style.display = "block";
}

function closeCalc() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


let input = document.querySelector("#input-box");
let buttons = document.querySelectorAll("button");
let str = "";
let arr = Array.from(buttons);
console.log(arr);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = eval(str);
    } else if (e.target.innerHTML == "DEL") {
      str = str.substring(0, str.length - 1);
    } else if (e.target.innerHTML == "AC") {
      str = "";
    } else if (e.target.innerHTML == `<i class="fa fa-close"></i>`) {
      window.location.href = "../index.html";
    } else {
      str += e.target.innerHTML;
    }

    input.value = str;
  });
});
