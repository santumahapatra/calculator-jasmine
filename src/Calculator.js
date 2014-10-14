function Calculator() {
  var firstOperand;

  this.setFirstOperand = function(input) {
    if ( typeof(input) === 'number' ) {
      this.firstOperand = input;
    }
  };
}