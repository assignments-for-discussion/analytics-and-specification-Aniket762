function filterOutliers(numbers) {
  var values = numbers.concat();

  values.sort((a, b) => a - b);

  var q1 = values[Math.floor(values.length / 4)];
  var q3 = values[Math.ceil(values.length * (3 / 4)) - 1];
  var iqr = q3 - q1;

  var maxValue = q3 + iqr * 1.5;
  var minValue = q1 - iqr * 1.5;

  var filteredValues = values.filter((x) => x <= maxValue && x >= minValue);

  return filteredValues;
}

function average(numbers) {
  const naNumbers = numbers.filter((num) => !Number.isNaN(num));
  const newNumbers = filterOutliers(naNumbers);

  return newNumbers.reduce((p, c) => p + c, 0) / newNumbers.length;
}

module.exports = { average };
