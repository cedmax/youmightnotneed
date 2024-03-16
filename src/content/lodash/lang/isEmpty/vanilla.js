const isEmpty = obj =>
  !Object.entries(obj || {}).length && !obj?.length && !obj?.size

exports.null = isEmpty(null)
// => true

exports.boolean = isEmpty(true)
// => true

exports.number = isEmpty(1)
// => true

exports.string = isEmpty('not empty')
// => false

exports.set = isEmpty(new Set([1, 2, 3]))
// => false

exports.map = isEmpty(new Map([['a', 1]]))
// => false

exports.array = isEmpty([1, 2, 3])
// => false

exports.object = isEmpty({ 'a': 1 })
// => false

exports.emptyArray = isEmpty([])
// => true

exports.emptyString = isEmpty('')
// => true

exports.emptySet = isEmpty(new Set())
// => true

exports.emptyMap = isEmpty(new Map())
// => true
