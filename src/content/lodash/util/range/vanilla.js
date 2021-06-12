const range = (start, end, increment) => {
  const isEndDef = typeof end !== 'undefined'
  end = isEndDef ? end : start
  start = isEndDef ? start : 0

  if (typeof increment === 'undefined') {
    increment = Math.sign(end - start)
  }

  const length = Math.abs((end - start) / (increment || 1))

  const { result } = Array.from({ length }).reduce(
    ({ result, current }) => ({
      current: current + increment,
      result: [...result, current],
    }),
    { current: start, result: [] }
  )

  return result
}

exports.example1 = range(4)
// => [0, 1, 2, 3]

exports.example2 = range(-4)
// => [0, -1, -2, -3]

exports.example3 = range(1, 5)
// => [1, 2, 3, 4]

exports.example4 = range(0, 20, 5)
// => [0, 5, 10, 15]

exports.example5 = range(0, -4, -1)
// => [0, -1, -2, -3]

exports.example6 = range(1, 4, 0)
// => [1, 1, 1]

exports.example7 = range(0)
// => []
