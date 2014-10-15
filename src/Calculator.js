function Calculator() {
  var firstOperand, secondOperand, operator;

  this.setFirstOperand = function(input) {
    if ( this.checkForNum(input) ) {
      this.firstOperand = input;
    }
  };

  this.setSecondOperand = function(input) {
    if ( this.checkForNum(input) ) {
      this.secondOperand = input;
    }
  };

  this.setOperator = function(input) {
    if ( input !== null && input.match(/^[+-/^\*]$/) ) {
      this.operator = input;
    }   
  };

  this.checkForNum = function(input){
    return typeof(input) === 'number';
  };

  this.calculate = function() {
    /*var math_it_up = {
      '+': function (x, y) {return x + y},
      '-': function (x, y) {return x - y},
      '*': function (x, y) {return x * y},
      '/': function (x, y) {return x / y},
      '^': function (x, y) {return x ^ y}
    };*/

    //math_it_up[this.operator][](this.firstOperand, this.secondOperand);
  }
}