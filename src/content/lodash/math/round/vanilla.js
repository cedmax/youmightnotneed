const round = (num, precision = 0) => {
  const modifier = 10 ** precision
  return !modifier ? Math.round(num) : Math.round(num * modifier) / modifier
}

exports.round = round(4.006)
// => 4

exports.precision = round(4.006, 2)
// => 4.01

exports.negPrecision = round(4060, -2)
// => 4100
