const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr]
  if (chunkSize <= 0) return cache
  while (tmp.length) cache.push(tmp.splice(0, chunkSize))
  return cache
}

exports.noSize = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
// => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]

exports.simple = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)
// => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]

exports.chunkSizeZero = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 0)
// => []

exports.chunkSizeNegative = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], -1)
// => []
