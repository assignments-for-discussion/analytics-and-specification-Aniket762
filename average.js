function getStandardDeviation(numbers) {
  var values = numbers.concat();

  const n = values.length;
  const mean = values.reduce((a, b) => a + b) / n;
  const standardDeviation = Math.sqrt(
    values.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
  );
  return standardDeviation;
}

function filterOutlierWithSd(numbers) {
  var values = numbers.concat();

  const averageAll = values.reduce((p, c) => p + c, 0) / values.length;
  const standardDeviation = getStandardDeviation(values);
  const lowerBound = averageAll - 2 * standardDeviation;
  const upperBound = averageAll + 2 * standardDeviation;
  var filteredValues = values.filter((x) => x <= upperBound && x >= lowerBound);

  return filteredValues;
}

function filterOutlierWithIQR(numbers) {
  var values = numbers.concat();

  values.sort((a, b) => a - b);

  var firstQuartile = values[Math.floor(values.length / 4)];
  var thirdQuartile = values[Math.ceil(values.length * (3 / 4)) - 1];
  var interQuartileRange = thirdQuartile - firstQuartile;

  var maxValue = thirdQuartile + interQuartileRange * 1.5;
  var minValue = firstQuartile - interQuartileRange * 1.5;

  var filteredValues = values.filter((x) => x <= maxValue && x >= minValue);

  return filteredValues;
}

function average(numbers) {
  if (numbers.length == 0) {
    return NaN;
  } else {
    const numsWithoutNan = numbers.filter((num) => !Number.isNaN(num));
    const numsWithoutOutliersAndNan = filterOutlierWithSd(numsWithoutNan);

    return (
      numsWithoutOutliersAndNan.reduce((p, c) => p + c, 0) /
      numsWithoutOutliersAndNan.length
    );
  }
}

module.exports = { average };
