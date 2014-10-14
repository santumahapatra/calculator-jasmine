function Calculator() {
  var firstOperand;

  this.setFirstOperand = function(input) {
    if ( this.checkForNum(input) ) {
      this.firstOperand = input;
    }
  };

  this.checkForNum = function(input){
    return typeof(input) === 'number';
  };
}