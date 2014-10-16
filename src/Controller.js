var validateInput = function (operand) {
  return ( operand === null || operand === "" || ( "" + parseFloat(operand, 10) !== operand ) ) ? false : true;
};

var validateOperator = function(operator) {
  return ( operator !== null && operator !== "" && operator.match(/^[+-/\%\*]$/) !== null ) ? true : false;
};

var checkOperand = function(value, target){
  var operand = document.getElementById(target).value;
  var errorElement = document.getElementsByClassName('error-' + target)[0];
  if (validateInput(operand) === false) {
    errorElement.classList.remove("hide");
    return false;
  }
  else {
    errorElement.classList.add("hide");
    return true;
  }
}

var calculateOutput = function(operand1, operand2, operator) {
  console.log("Hi");
  var calc = new Calculator();
  var o1, o2, op;

  o1 = checkOperand(operand1, 'operand1') ? parseFloat(operand1, 10) : null;
  o2 = checkOperand(operand2, 'operand2') ? parseFloat(operand2, 10) : null;
  //op = validateOperator(operator) ? operator : null;
  op = '+';

  var output = (o1 !== null || o2 !== null || op !== null) ? calc.calculate(o1, o2, op) : "Garbage In Garbage Out";

  document.getElementById('output').value = output;
};

setInterval(calculateOutput(), 5000)