// on click, numbers & operations appended to calculation div via data attr

var buttons = document.querySelectorAll('.btn');
var calculation = document.getElementById('calculation');

function removeTransition(e) {
  this.classList.remove('clicked');
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    this.classList.add('clicked');
    this.addEventListener('transitionend', removeTransition);

    var btnNum = this.getAttribute("data-num");
    var btnOp = this.getAttribute("data-operation");

    if (btnNum) {
      calculation.appendChild(document.createTextNode(btnNum + ' '));
    }

    if (btnOp) {
      if (btnOp === "ac") {
        while (calculation.firstChild) {
          calculation.removeChild(calculation.firstChild);
        }
      } else {
        calculation.appendChild(document.createTextNode(btnOp + ' '));
      }
    }


  })
}

// get btn background color to change when clicked

// if >= 2 numbers clicked consecutively, put space after the last number

// to get rest of function buttons to work, need to keep track of previous numbers?

// refactor loop by using forEach?
