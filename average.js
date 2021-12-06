function average(numbers) {
  const naNumbers = numbers.filter((num) => !Number.isNaN(num));

  return naNumbers.reduce((p, c) => p + c, 0) / naNumbers.length;
}

module.exports = { average };
