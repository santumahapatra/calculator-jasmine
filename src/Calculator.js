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
    
  };

  this.checkForNum = function(input){
    return typeof(input) === 'number';
  };
}