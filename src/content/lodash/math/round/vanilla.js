const round = (num, precision) => {
  const modifier = 10 ** precision
  return Math.round(num * modifier) / modifier
}

exports.round = Math.round(4.006)
// => 4

exports.precision = round(4.006, 2)
// => 4.01

exports.negPrecision = round(4060, -2)
// => 4100
