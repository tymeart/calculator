
var buttons = document.querySelectorAll('.btn');
var calculation = document.getElementById('calculation');
var result = document.getElementById('result');
var input = [];
var total;
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var coreOperators = ['*', '/', '+', '-'];
var extendedOperators = ['*', '/', '+', '-', '.'];

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
      return num.toFixed(10);
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
    else if (btnVal === '=') {
      total = eval(input.join(''));
      result.textContent = total;
      input.push('=');
    }
    // if a number is clicked
    else if (btnVal !== NaN && numbers.indexOf(parseInt(btnVal)) !== -1) {
      update(btnVal);
      calculation.textContent = total;
    }
    // if an operator is clicked
    else if (coreOperators.indexOf(btnVal) !== -1) {
      // check if last button clicked was '='
      if (input[input.length-1] === '=') {
        // change input to the last evaluated result
        input = [];
        input.push(result.textContent);
        // have calculation div reflect this new input
        calculation.textContent = result.textContent;
        // clear the result
        result.textContent = '';
      }
      update(btnVal);
      calculation.textContent = total;
    }
    // if . was clicked
    else if (btnVal === '.') {
      // check if last button clicked was '='
      if (input[input.length-1] === '=') {
        input = [];
        result.textContent = '';
      }
      update(btnVal);
      calculation.textContent = total;
    }

  });

}


// but what if the operation button is clicked before the number is clicked?
  // e.g. +/- 20 is the same as 20 +/-
  // but % 80 doesn't work, 80 % does

// make parentheses button instead of %?
// when you use CE and change the number, it evaluates as if parentheses are around the first part of the expression

// change divide and multiply to / and * when evaluating instead?
