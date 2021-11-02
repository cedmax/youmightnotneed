const get = (obj, path, defValue) => {
  // If path is not defined or it has false value
  if (!path) return undefined
  // Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
  // Regex explained: https://regexr.com/58j0k
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)
  // Find value
  const result = pathArray.reduce(
    (prevObj, key) => prevObj && prevObj[key],
    obj
  )
  // If found value is undefined return default value; otherwise return the value
  return result === undefined ? defValue : result
}

const simpleObject = { a: { b: 2 } }
const complexObject = { a: [{ bar: { c: 3 } }] }
const falsyObject = { a: null, b: undefined, c: 0 }

exports.simplePath = get(simpleObject, 'a.b')
// => 2
exports.complexPath = get(complexObject, 'a[0].bar.c')
// => 3
exports.complexPathArray = get(complexObject, ['a', '0', 'bar', 'c'])
// => 2
exports.simpleDefault = get(simpleObject, 'a.bar.c', 'default')
// => 'default'
exports.complexDefault = get(complexObject, 'a.bar.c', 'default')
// =>  'default
exports.falseCase = get(complexObject, null)
// =>  undefined
exports.nullCase = get(falsyObject, 'a', 'default')
// =>  null
exports.undefinedCase = get(falsyObject, 'b', 'default')
// =>  undefined
exports.zeroCase = get(falsyObject, 'c', 'default')
// =>  zero
