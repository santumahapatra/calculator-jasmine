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

  describe("sets the given input as Operand", function() {
    it("should not set operand if it has wrong format", function () {
      expect(calculator.setOperand("a")).toBe(null);
    });

    it("sets the operand if operand has integer or float format", function () {
      expect(calculator.setOperand(2)).toBe(2);
    });
  });

  describe("on checking for operator", function(){
    it("should return true for +, -, /, * or % types", function(){
      expect(calculator.checkOperator('+')).toBe(true);
      expect(calculator.checkOperator('-')).toBe(true);
      expect(calculator.checkOperator('/')).toBe(true);
      expect(calculator.checkOperator('*')).toBe(true);
      expect(calculator.checkOperator('%')).toBe(true);
    });

    it("should return false for other types", function(){
      expect(calculator.checkOperator("a")).toBe(false);
      expect(calculator.checkOperator(['a'])).toBe(false);
      expect(calculator.checkOperator({})).toBe(false);
    });
  });

  describe("setting the Operator", function() {
    it("should not set operator if not +, -, *, /, % or %", function () {
      expect(calculator.setOperator('(')).toBe(null);
    });

    it("should set operator if +, -, *, /, % or %", function () {
      expect(calculator.setOperator('+')).toBe('+');
      expect(calculator.setOperator('-')).toBe('-');
      expect(calculator.setOperator('*')).toBe('*');
      expect(calculator.setOperator('/')).toBe('/');
      expect(calculator.setOperator('%')).toBe('%');
    });
  });

  describe("calculates", function() {
    it("the correct output on correct input", function(){
      expect(calculator.calculate(2, 4, '+')).toBe(6);
      expect(calculator.calculate(2, 4, '*')).toBe(8);
      expect(calculator.calculate(2, 4, '/')).toBe(0.5);
      expect(calculator.calculate(2, 4, '-')).toBe(-2);
      expect(calculator.calculate(2, 4, '%')).toBe(2);
    });

    it("throws error on incorrect input", function(){
      expect(calculator.calculate("a", 4, '/')).toBe(null);
    });
  });
});
