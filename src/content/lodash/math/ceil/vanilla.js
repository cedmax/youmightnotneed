const ceil = (num, precision = 0) => {
  const modifier = 10 ** precision
  return !modifier ? Math.ceil(num) : Math.ceil(num * modifier) / modifier
}

exports.ceil = ceil(4.006)
// => 5

exports.precision = ceil(6.004, 2)
// => 6.01

exports.negPrecision = ceil(6040, -2)
// => 6100
