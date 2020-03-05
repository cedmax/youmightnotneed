exports.arrays = [2.1, 1.2].filter(
  a => ![2.3, 3.4].map(Math.floor).includes(Math.floor(a))
)
// => [1.2]

// The `_.property` iteratee shorthand.
exports.objects = [{ x: 2 }, { x: 1 }].filter(
  a => ![{ x: 1 }].map(b => b.x).includes(a.x)
)
// => [{ 'x': 2 }]
