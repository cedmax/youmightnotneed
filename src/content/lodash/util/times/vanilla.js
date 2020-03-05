const times = (n, func = i => i) =>
  Array.from({ length: n }).map((_, i) => func(i))

exports.simple = times(3)
// => [0, 1, 2]

exports.withIteratee = times(3, i => i + 3)
// => [3, 4, 5]
