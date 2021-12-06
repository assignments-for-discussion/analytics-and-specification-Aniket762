function filterOutliers(numbers) {
  // Creating a copy of the array
  var values = numbers.concat();

  // Sorting the array
  values.sort((a, b) => a - b);

  // Finding outlier thresholds dynamically
  var q1 = values[Math.floor(values.length / 4)];
  var q3 = values[Math.ceil(values.length * (3 / 4)) - 1];
  var iqr = q3 - q1;

  // Setting the minimum and maximum values
  var maxValue = q3 + iqr * 1.5;
  var minValue = q1 - iqr * 1.5;

  // Then filter anything beyond or beneath these values.
  var filteredValues = values.filter((x) => x <= maxValue && x >= minValue);

  return filteredValues;
}

function average(numbers) {
  const naNumbers = numbers.filter((num) => !Number.isNaN(num));
  const newNumbers = filterOutliers(naNumbers);

  return newNumbers.reduce((p, c) => p + c, 0) / newNumbers.length;
}

module.exports = { average };
