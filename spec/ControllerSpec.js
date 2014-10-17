describe("Controller", function(){
  var controller;

  beforeEach(function() {
    controller = new Controller();
  });

  it("validates operand input", function(){
    expect(controller.validateOperand('2')).toBe(true);
    expect(controller.validateOperand('4.5')).toBe(true);
    expect(controller.validateOperand('a')).toBe(false);
    expect(controller.validateOperand('&')).toBe(false);
  });

  it("validates operator input", function(){
    expect(controller.validateOperator('+')).toBe(true);
    expect(controller.validateOperator('-')).toBe(true);
    expect(controller.validateOperator('*')).toBe(true);
    expect(controller.validateOperator('/')).toBe(true);
    expect(controller.validateOperator('%')).toBe(true);
    expect(controller.validateOperator('a')).toBe(false);
    expect(controller.validateOperator('&')).toBe(false);
  });

});
