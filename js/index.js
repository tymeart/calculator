// on click, numbers & operations appended to calculation div via data attr

var buttons = document.querySelectorAll('.btn');
var calculation = document.getElementById('calculation');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
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

// get calculation div to clear when AC is clicked
