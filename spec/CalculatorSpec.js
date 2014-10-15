describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  describe("on checking for number Format", function(){
    it("should return true for integer and float types", function(){
      expect(calculator.checkForNum(3)).toBe(true);
      expect(calculator.checkForNum(-3.4)).toBe(true);
    });

    it("should return false for string and object types", function(){
      expect(calculator.checkForNum("a")).toBe(false);
      expect(calculator.checkForNum(['a'])).toBe(false);
      expect(calculator.checkForNum({})).toBe(false);
    });
  });

  describe("on the First Operand", function() {
    it("should not set operand if it has wrong format", function () {
      calculator.setFirstOperand("a");
      expect(calculator.firstOperand).toBe(undefined);
    });

    it("sets the operand if operand has integer or float format", function () {
      calculator.setFirstOperand(2);
      expect(calculator.firstOperand).toBe(2);
    });
  });

  describe("on the Second Operand", function() {
    it("should not set operand if it has wrong format", function () {
      calculator.setSecondOperand("a");
      expect(calculator.secondOperand).toBe(undefined);
    });

    it("sets the operand if operand has integer or float format", function () {
      calculator.setSecondOperand(2);
      expect(calculator.secondOperand).toBe(2);
    });
  });

  describe("setting the Operator", function() {
    it("should not set operator if not +, -, *, /, ^ or %", function () {
      calculator.setOperator('(');
      expect(calculator.operator).toBe(undefined);
    });

    it("should set operator if +, -, *, /, ^ or %", function () {
      calculator.setOperator('+');
      expect(calculator.operator).toBe('+');
    });
  });

  describe("calculates", function() {
    it("the correct output on correct input", function(){
      calculator.setFirstOperand(2);
      calculator.setSecondOperand(4);
      calculator.setOperator('+');
      expect(calculator.calculate()).toBe(4);
    });

    it("the correct output on correct input", function(){
      calculator.setFirstOperand(2);
      calculator.setSecondOperand(4);
      calculator.setOperator('/');
      expect(calculator.calculate()).toBe(0.5);
    });

    xit("throws error on incorrect input", function(){
      calculator.setFirstOperand("a");
      calculator.setSecondOperand(4);
      calculator.setOperator('+');
    });
  });
});
