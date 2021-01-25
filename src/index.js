export default function sumOfEvenNumbers(numbers) {
  if (!numbers && !Array.isArray(numbers)) {
    throw new Error('Parameter numbers must be an array of numbers');
  }

  let sum = 0;

  for (let number of numbers) {
    if (number % 2 === 0) {
      sum += number;
    }
  }

  return sum;
}