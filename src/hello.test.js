const add = (a, b) => a + b;

describe("arithmatic", () => {
  it("Adds two numbers are currectly", () => {
    expect(add(10, 20)).toBe(30);
  });
  it("Returns NaN if no agrs passed", () => {
    expect(add()).toBeNaN();
  });
});
