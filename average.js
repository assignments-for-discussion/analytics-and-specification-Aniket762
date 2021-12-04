function average(numbers) {
  const NaNumbers = numbers.filter(function (num) {
    return !Number.isNaN(num);
  });

  return NaNumbers.reduce((p, c) => p + c, 0) / NaNumbers.length;
}

module.exports = { average };
