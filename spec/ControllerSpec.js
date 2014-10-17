describe("Controller", function(){
  var controller;

  beforeEach(function() {
    controller = new Controller();
  });

  describe("validateOperand", function(){
    it("validates operand input - decimals and floats", function(){
      expect(controller.validateOperand('2')).toBe(true);
      expect(controller.validateOperand('4.5')).toBe(true);
      expect(controller.validateOperand('a')).toBe(false);
      expect(controller.validateOperand('&')).toBe(false);
    });
  });

  describe("validateOperator", function(){
    it("validates operator input - +, -, *, / and %", function(){
      expect(controller.validateOperator('+')).toBe(true);
      expect(controller.validateOperator('-')).toBe(true);
      expect(controller.validateOperator('*')).toBe(true);
      expect(controller.validateOperator('/')).toBe(true);
      expect(controller.validateOperator('%')).toBe(true);
      expect(controller.validateOperator('a')).toBe(false);
      expect(controller.validateOperator('&')).toBe(false);
    });
  });

  describe("getErrorElement", function(){
    it("returns the correct error classname", function(){
      expect(controller.getErrorElement('operand1').className.contains('error-operand1')).toBe(true);
      expect(controller.getErrorElement('operand2').className.contains('error-operand2')).toBe(true);
      expect(controller.getErrorElement('operator').className.contains('error-operator')).toBe(true);
      expect(controller.getErrorElement('target')).toBe(undefined);
    });
  });

  describe("checkInput", function(){
    it("validates and returns float values of operands or returns null", function(){
      var element1 = document.getElementById('operand1');
      var element2 = document.getElementById('operand2');
      var errorElement1 = document.getElementsByClassName('error-operand1')[0];
      var errorElement2 = document.getElementsByClassName('error-operand2')[0];

      element1.value = '23';
      expect(controller.checkInput('operand1')).toBe(23);
      expect(errorElement1.className.contains('hide')).toBe(true);

      element2.value = '3.5';
      expect(controller.checkInput('operand2')).toBe(3.5);
      expect(errorElement2.className.contains('hide')).toBe(true);

      element1.value = 'a';
      expect(controller.checkInput('operand1')).toBe(null);
      expect(errorElement1.className.contains('hide')).toBe(false);
    });

    it("validates and returns operator or returns null", function(){
      var element = document.getElementById('operator');
      var errorElement = document.getElementsByClassName('error-operator')[0];

      element.value = '+';
      expect(controller.checkInput('operator')).toBe('+');
      expect(errorElement.className.contains('hide')).toBe(true);

      element.value = '-';
      expect(controller.checkInput('operator')).toBe('-');
      expect(errorElement.className.contains('hide')).toBe(true);

      element.value = '*';
      expect(controller.checkInput('operator')).toBe('*');
      expect(errorElement.className.contains('hide')).toBe(true);

      element.value = '/';
      expect(controller.checkInput('operator')).toBe('/');
      expect(errorElement.className.contains('hide')).toBe(true);

      element.value = '%';
      expect(controller.checkInput('operator')).toBe('%');
      expect(errorElement.className.contains('hide')).toBe(true);

      element.value = 'a';
      expect(controller.checkInput('operator')).toBe(null);
      expect(errorElement.className.contains('hide')).toBe(false);
    });
  });
});
