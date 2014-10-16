function Calculator() {

  this.setOperand = function(input) {
    return this.checkForNum(input) ? input : null;
  };

  this.setOperator = function(input) {
    return this.checkOperator(input) ? input : null;
  };

  this.checkOperator = function(operator){
    return (typeof(operator) === "string" && operator !== null && operator.match(/^[+-/^\*]$/) !== null );
  };


  this.checkForNum = function(input){
    return typeof(input) === 'number';
  };

  this.calculate = function(firstOperand, secondOperand, operator) {
    var math_it_up = {
      '+': function (x, y) {return x + y},
      '-': function (x, y) {return x - y},
      '*': function (x, y) {return x * y},
      '/': function (x, y) {return x / y},
      '^': function (x, y) {return x ^ y}
    };

    var first = this.setOperand(firstOperand);
    var second = this.setOperand(secondOperand);
    var sanitizedOperator = this.setOperator(operator);

    if ( first !== null && second !== null ) {
      return math_it_up[sanitizedOperator](first, second);
    }
    else {
      return null;
    }
  }
}
