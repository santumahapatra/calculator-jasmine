function Controller() {
  var self = this;

  this.validateOperand = function (operand) {
    return ( operand === null || operand === "" || ( "" + parseFloat(operand, 10) !== operand ) ) ? false : true;
  };

  this.validateOperator = function(operator) {
    return ( operator!== undefined && operator !== null && operator !== "" && operator.match(/^[+-/\%\*]$/) !== null ) ? true : false;
  };

  this.getValue = function(domElement) {
    return document.getElementById(domElement).value;
  };

  this.getErrorElement = function(target) {
    return document.getElementsByClassName('error-' + target)[0];
  };

  this.checkInput = function(target){
    var val = this.getValue(target);
    var errorElement = this.getErrorElement(target);

    if (target == 'operator') {
      return this.checkOperator(val, errorElement);
    }
    else {
      return this.checkOperand(val, errorElement);
    }
  };

  this.checkOperand = function(val, errorElement){
    if (this.validateOperand(val) === false) {
      errorElement.classList.remove("hide");
      return null;
    }
    else {
      errorElement.classList.add("hide");
      return parseFloat(val, 10);
    }
  };

  this.checkOperator = function(val, errorElement){
    if (this.validateOperator(val) === false) {
      errorElement.classList.remove("hide");
      return null;
    }
    else {
      errorElement.classList.add("hide");
      return val;
    }
  };

  this.puppeteer = function() {
    var o1 = self.checkInput('operand1');
    var o2 = self.checkInput('operand2');
    var op = self.checkInput('operator');

    var calc = new Calculator();
    var output = (o1 !== null && o2 !== null && op !== null) ? calc.calculate(o1, o2, op) : "Garbage In Garbage Out";

    document.getElementById('output').value = output;
  };

  this.bindEvents = function(){
    inputs = document.getElementsByClassName('input');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].onblur = this.puppeteer;
      inputs[i].onfocus = this.puppeteer;
      inputs[i].onchange = this.puppeteer;
    }
  };

  this.execute = function(){
    this.bindEvents();
  }
};

var start = new Controller();
start.execute();
