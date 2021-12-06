function average(numbers) {
  const naNumbers = numbers.filter(function (num) {
    return !Number.isNaN(num);
  });

  return naNumbers.reduce((p, c) => p + c, 0) / naNumbers.length;
}

module.exports = { average };
