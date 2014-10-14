describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
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

  describe("on checking for number Format", function(){
    it("should return true for integer and float types", function(){
      expect(calculator.checkForNum(3)).toBe(true);
    });

    it("should return false for string and object types", function(){
      expect(calculator.checkForNum("a")).toBe(false);
      expect(calculator.checkForNum(['a'])).toBe(false);
      expect(calculator.checkForNum({})).toBe(false);
    });
  });
});
