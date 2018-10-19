module.exports = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (flattened, other) => flattened.concat(other),
  []
)
// => [4, 5, 2, 3, 0, 1]
