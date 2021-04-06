function pull(array, ...items) {
  return array.filter(i => !items.includes(i))
}

module.exports = pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c')
// => ['b', 'b']