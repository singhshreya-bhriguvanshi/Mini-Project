var hit,
  s = 0,
  flag = 0;
var timer = 60;
function makeBubble() {
  var str = "";
  for (var i = 1; i <= 168; i++) {
    str += `<div class="bubble">${Math.floor(Math.random() * 20)}</div>`;
  }
  document.querySelector("#btm").innerHTML = str;
}

function makeHit() {
  hit = Math.floor(Math.random() * 20);
  console.log(hit);
  document.querySelector("#hitval").textContent = hit;
}

function timeInterval() {
  var timInt = setInterval(function () {
    if (timer >= 0) {
      document.querySelector("#timeval").textContent = timer--;
    } else {
      document.querySelector("#btm").innerHTML = `<h1 style="font-size: 72px;
      font-weight: 800;
      color: red;
      ">Game Over</h1>`;
      clearInterval(timInt);
    }
  }, 1000);
}

function score(i) {
  if (i) {
    s += 10;
  } else {
    s -= 10;
  }
  document.querySelector("#score").textContent = s;
}

document.querySelector("#btm").addEventListener("click", function (dets) {
  var ch = Number(dets.target.textContent);
  // if (flag == 0) {
  // flag = 1;
  // } els
  if (ch == hit) {
    score(1);
  } else {
    score(0);
  }
  makeBubble();
  makeHit();
});
var st = document.querySelector("#start");
st.addEventListener("click", function () {
  makeBubble();
  makeHit();
  timeInterval();
  st.style.display = "none";
});

var e = document.querySelector("#end");
console.log(end);
end.addEventListener("click", function () {
  window.location.href = "../index.html";
});
