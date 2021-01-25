import sumOfEvenNumbers from '../src/index.js';

describe('Unit tests for sumOfEvenNumbers method', () => {
  it('should throw an error when function is not called with an array', () => {
    expect(() => sumOfEvenNumbers(null)).toThrowError(
      'Parameter numbers must be an array of numbers'
    );
  });

  it('should return then correct sum', () => {
    const numbers = [1, 2, 3, 4, 6];
    const result = sumOfEvenNumbers(numbers);
    expect(result).toBe(12);
  });

  it('should return 0 when no even number is found', () => {
    const numbers = [1, 3, 5, 7, 9];
    const result = sumOfEvenNumbers(numbers);
    expect(result).toBe(0);
  });
});
