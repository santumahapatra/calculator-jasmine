var validateInput = function (operand) {
  return ( operand == null || operand === "" || ( "" + parseFloat(operand, 10) !== operand ) ) ? false : true;
};

var validateOperator = function(operator) {
  return ( operator !== null && operator !== "" && operator.match(/^[+-/\%\*]$/) !== null ) ? true : false;
};

