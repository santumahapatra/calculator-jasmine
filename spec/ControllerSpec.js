
describe("Controller", function(){
  it("validates operand input", function(){
    expect(validateInput('2')).toBe(true);
    expect(validateInput('4.5')).toBe(true);
    expect(validateInput('a')).toBe(false);
    expect(validateInput('&')).toBe(false);
  });

  it("validates operator input", function(){
    expect(validateOperator('+')).toBe(true);
    expect(validateOperator('-')).toBe(true);
    expect(validateOperator('*')).toBe(true);
    expect(validateOperator('/')).toBe(true);
    expect(validateOperator('%')).toBe(true);
    expect(validateOperator('a')).toBe(false);
    expect(validateOperator('&')).toBe(false);
  });

});