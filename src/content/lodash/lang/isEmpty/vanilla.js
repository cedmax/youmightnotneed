const isEmpty = (v) =>
  v === null ||
  v === undefined ||
  v === true ||
  v === '' ||
  typeof v === 'number' ||
  typeof v === 'symbol' ||
  typeof v === 'function' ||
  (v instanceof Map || v instanceof Set
    ? v.size === 0
    : (typeof v === 'object' && !Object.keys(v).length)
  )

exports.null = isEmpty(null)
// => true
 
exports.true = isEmpty(true)
// => true
 
exports.number = isEmpty(1)
// => true
 
exports.array = isEmpty([1, 2, 3])
// => false
 
exports.object = isEmpty({ 'a': 1 })
// => false

exports.map = isEmpty(new Map())
// => true