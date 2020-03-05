const size = item =>
  item.constructor === Object ? Object.keys(item).length : item.length

exports.array = size([1, 2, 3])
// => 3

exports.object = size({ a: 1, b: 2 })
// => 2

exports.string = size('pebbles')
// => 7
