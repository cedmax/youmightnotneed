const xor = (arr1, arr2) => {
  const a = arr1.filter(x => !arr2.includes(x))
  const b = arr2.filter(x => !arr1.includes(x))

  return [...a, ...b]
}

module.exports = xor([2, 1], [2, 3])
// => [1, 3]
