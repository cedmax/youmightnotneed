const xor = (...arrays) => {
  // this function can be used as a standalone xor if you only ever need it to work with two arguments
  const binaryXor = (arr1, arr2) => {
    const a = arr1.filter(x => !arr2.includes(x))
    const b = arr2.filter(x => !arr1.includes(x))

    return Array.from(new Set([...a, ...b]))
  }

  return arrays.reduce(binaryXor, [])
}

module.exports.unique = xor([2, 1, 4], [2, 3, 2, 6])
// => [1, 4, 3, 6]

module.exports.duplicates = xor([1, 1, 2], [2, 2, 3])
// => [1, 3]

module.exports.variadic = xor([1], [2], [1, 3], [2, 4])
// => [3, 4]
