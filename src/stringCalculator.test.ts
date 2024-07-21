import { add } from "./StringCalculator";

// write test cases for string calculator

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  it('should return the sum of two numbers separated by a comma', () => {
    expect(add("1,5")).toBe(6);
    expect(add("3,7")).toBe(10);
  });

  it('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
  });

  it('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n5|4|3")).toBe(12);
  });

  it('should throw an error if negative numbers are used', () => {
    expect(() => add("1,-2,3")).toThrow('negative numbers not allowed: -2');
    expect(() => add("//;\n1;-2;3;-4")).toThrow('negative numbers not allowed: -2,-4');
  });
});
