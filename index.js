// Your code here
let dodger = document.getElementById("dodger");
let leftNumbers = dodger.style.left.replace("px", "");
let left = parseInt(leftNumbers, 10);

document.addEventListener("keydown", function(e) {
  moveDodgerLeft(e);
});

document.addEventListener("keydown", function(e) {
  moveDodgerRight(e);
});

function moveDodgerLeft() {
    debugger;
//   if ((e.key == "ArrowLeft") && (left > 0 )){
      dodger.style.left = `${left -= 1}px`;
//   }
}

function moveDodgerRight() {
//   if ((e.key == "ArrowRight") && (left < 360 )){
      dodger.style.left = `${left += 1}px`;
//   }
}