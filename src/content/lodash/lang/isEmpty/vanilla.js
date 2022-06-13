const isEmpty = (v) => {
  if (v === null || v === undefined || v === '' || (typeof v !== 'object' && typeof v !== 'string')) {
    return true
  }
  if (v instanceof Map || v instanceof Set) {
    return v.size === 0
  }
  return (typeof v === 'object' && !Object.keys(v).length)
}

exports.null = isEmpty(null)
// => true

exports.undef = isEmpty()
// => true

exports.boolTrue = isEmpty(true)
// => true

exports.boolFalse = isEmpty(false)
// => true

exports.number = isEmpty(1)
// => true

exports.array = isEmpty([1, 2, 3])
// => false

exports.emptyArray = isEmpty([])
// => true

exports.object = isEmpty({ 'a': 1 })
// => false

exports.emptyObject = isEmpty({})
// => true

exports.map = isEmpty(new Map([['a', 1]]))
// => false

exports.emptyMap = isEmpty(new Map())
// => true

exports.symbol = isEmpty(Symbol(''))
// => true

exports.string = isEmpty('foo')
// => false

exports.emptyString = isEmpty('')
// => true

exports.function = isEmpty(function (a, b) { return a + b })
// => true

