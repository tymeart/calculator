
var buttons = document.querySelectorAll('.btn');
var calculation = document.getElementById('calculation');
var result = document.getElementById('result');
var input = [];
var total;
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var operators = ["x", "÷", "+", "-"];

function removeTransition() {
  this.classList.remove('clicked');
}

function update(buttonValue) {
  input.push(buttonValue);
  total = input.join('');
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    this.classList.add('clicked');
    this.addEventListener('transitionend', removeTransition);

    // get button id
    var btnVal = this.id;

    // if AC is clicked
    if (btnVal === 'ac') {
      input = [];
      total = input.join('');
      calculation.textContent = total;
    }
    // if CE is clicked
    else if (btnVal === 'ce') {
      input.pop();
      total = input.join('');
      calculation.textContent = total;
    }
    // if a number is clicked
    else if (btnVal !== NaN && numbers.indexOf(parseInt(btnVal)) > -1) {
      update(btnVal);
      calculation.textContent = total;
    }
    // if an operator is clicked
    else if (operators.indexOf(btnVal) > -1) {
      update(btnVal);
      calculation.textContent = total;
    }

  });

}


// but what if the operation button is clicked before the number is clicked?
  // e.g. +/- 20 is the same as 20 +/-
  // but % 80 doesn't work, 80 % does
// what if >=2 operation buttons clicked consecutively?
