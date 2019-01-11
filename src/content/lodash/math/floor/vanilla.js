const floor = (num, precision = 0) => {
  const modifier = 10 ** precision
  return !modifier ? Math.floor(num) : Math.floor(num * modifier) / modifier
}

exports.floor = floor(4.006)
// => 4

exports.precision = floor(0.046, 2)
// => 0.04

exports.negPrecision = floor(4060, -2)
// => 4000
