const chunk = (arr, chunkSize, cache = []) => {
  const tmp = [...arr]
  while (tmp.length) cache.push(tmp.splice(0, chunkSize))
  return cache
}

module.exports = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)
// => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]
