
var buttons = document.querySelectorAll('.btn');
var calculation = document.getElementById('calculation');
var result = document.getElementById('result');
var input = [];
var total;
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var operators = ["*", "/", "+", "-"];

function removeTransition() {
  this.classList.remove('clicked');
}

function update(buttonValue) {
  input.push(buttonValue);
  total = input.join('');
}

function truncate(num) {
  var str = num.toString();
  var counter = 0;

  // if there's a decimal and all the digits after the decimal are the same
  if (str.indexOf('.') !== -1) {
    var numAfterDecimalPoint = str[str.indexOf('.') + 1];
    // counts how many digits after decimal are the same as the one directly after the decimal
    for (var i = str.indexOf('.')+1; i < str.length; i++) {
      if (str[i] === numAfterDecimalPoint) {
        counter++;
      }
    }
    if (counter === (str.length - str.indexOf('.') - 1)) {
      return num.toFixed(5);
    } else {
      // not all the digits after the decimal are the same
      return str;
    }
  } else {
    // there's no decimal
    return str;
  }
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
      result.textContent = total;
    }
    // if CE is clicked
    else if (btnVal === 'ce') {
      input.pop();
      total = input.join('');
      calculation.textContent = total;
      result.textContent = '';
    }
    //if = is clicked
    else if (btnVal === "=") {
      total = eval(input.join(''));
      result.textContent = truncate(total);
    }
    // if a number is clicked
    else if (btnVal !== NaN && numbers.indexOf(parseInt(btnVal)) !== -1) {
      update(btnVal);
      calculation.textContent = total;
    }
    // if an operator is clicked
    else if (operators.indexOf(btnVal) !== -1) {
      update(btnVal);
      calculation.textContent = total;
    }

  });

}


// but what if the operation button is clicked before the number is clicked?
  // e.g. +/- 20 is the same as 20 +/-
  // but % 80 doesn't work, 80 % does
// what if >=2 operation buttons clicked consecutively? what happens when you clicked = after CE and last entry was an operator?

// truncate repeating decimals: toFixed or ?
// change divide and multiply to / and * when evaluating instead?

// change display css on calculation & result so they're in fixed positions
