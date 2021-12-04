
function average(numbers) {
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
