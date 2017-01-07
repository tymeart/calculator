
var buttons = document.querySelectorAll('.btn');
var calculation = document.getElementById('calculation');
var result = document.getElementById('result');
var input = [];
var total;

function removeTransition() {
  this.classList.remove('clicked');
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    this.classList.add('clicked');
    this.addEventListener('transitionend', removeTransition);

    var btnNum = this.getAttribute("data-num");
    var btnOp = this.getAttribute("data-operation");

    if (btnNum) {
      input.push(btnNum);
      total = input.join('');
      calculation.textContent = total;
    }

    if (btnOp) {
      if (btnOp === "ac") {
        while (calculation.firstChild) {
          calculation.removeChild(calculation.firstChild);
        }
      } else if (btnOp === "=") {
        // result.innerHTML();
      } else {
        calculation.appendChild(document.createTextNode(' ' + btnOp + ' '));
      }
    }

  });

}


// to get rest of function buttons to work, need to keep track of previous numbers?
// if prev button clicked was a number, apply CE/%/plusmin to it
// but what if the operation button is clicked before the number is clicked?
  // e.g. +/- 20 is the same as 20 +/-
  // but % 80 doesn't work, 80 % does
// what if >=2 operation buttons clicked consecutively?
