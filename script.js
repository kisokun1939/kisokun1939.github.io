var D100 = document.getElementById("D100");
var D6 = document.getElementById("D6");
var result = document.getElementById("result");

function Dice(max) {
  return Math.floor(Math.random() * max) + 1;
}

// D100.onclick = function() {
//   result.innerText = Dice(100);
// };

// D6.onclick = function() {
//   result.innerText = Dice(6);
// };

D100.onclick = function() {
  alert(Dice(100));
};

D6.onclick = function() {
  alert(Dice(6));
};