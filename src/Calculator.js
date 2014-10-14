function Calculator() {
  var firstOperand, secondOperand;

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

  this.checkForNum = function(input){
    return typeof(input) === 'number';
  };
}