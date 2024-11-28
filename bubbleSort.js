const numbers = [3, 5, 12, 37, 23, 2, 6, 3, 8];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] > numbers[j + 1]) {
      [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
    }
  }
}

console.log(numbers);
