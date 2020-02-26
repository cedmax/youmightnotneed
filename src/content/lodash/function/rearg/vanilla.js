const rearg = (func, order) => (...args) => {
  const reargs = order.map(idx => args[idx])
  return func(...reargs)
}

const rearged = rearg((a, b, c) => [a, b, c], [2, 0, 1])

module.exports = rearged('b', 'c', 'a')
// => ['a', 'b', 'c']
