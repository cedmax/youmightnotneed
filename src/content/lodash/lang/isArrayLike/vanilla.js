const isArrayLike = a =>
  typeof a !== 'function' &&
  a.length >= 0 &&
  a.length <= Number.MAX_SAFE_INTEGER

exports.array = isArrayLike([1, 2, 3])
// => true

exports.arrayLike = isArrayLike(document.body.children)
// => true

exports.string = isArrayLike('abc')
// => true

exports.obj = isArrayLike({ a: 1 })
// => false

exports.funct = isArrayLike(() => {})
// => false
