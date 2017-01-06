
var buttons = document.querySelectorAll('.btn');
var calculation = document.getElementById('calculation');

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
      calculation.appendChild(document.createTextNode(btnNum));
    }

    if (btnOp) {
      if (btnOp === "ac") {
        while (calculation.firstChild) {
          calculation.removeChild(calculation.firstChild);
        }
      } else {
        calculation.appendChild(document.createTextNode(' ' + btnOp + ' '));
      }
    }

    var prevVal = calculation.lastChild;
    console.log(typeof prevVal); // object!

    // if (typeof prevVal === 'number') {
    //   console.log("prev entry was a number");
    // } else {
    //   console.log("prev entry was an operation");
    // }

  });
}


// to get rest of function buttons to work, need to keep track of previous numbers?
// if prev button clicked was a number, apply CE/%/./plusmin to it
// what if >=2 operation buttons clicked consecutively?
