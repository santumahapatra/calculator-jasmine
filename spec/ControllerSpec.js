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
});
