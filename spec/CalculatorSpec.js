describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("throws error message on trying to set operand with wrong format", function () {
    calculator.setFirstOperand("a");
    expect(calculator.firstOperand).toBe(undefined);
  });

  it("sets the operand if operand has integer or float format", function () {
    calculator.setFirstOperand(2);
    expect(calculator.firstOperand).toBe(2);
  });
});
