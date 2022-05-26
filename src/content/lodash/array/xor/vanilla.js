const xor = (arr1, arr2) => {
  const a = arr1.filter(x => !arr2.includes(x))
  const b = arr2.filter(x => !arr1.includes(x))

  return [...a, ...b]
}

module.exports.unique = xor([2, 1, 4], [2, 3, 2, 6])
// => [1, 4, 3, 6]

module.exports.duplicates = xor([1, 1, 2], [2, 2, 3])
// => [1, 3]
