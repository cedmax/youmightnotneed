const has = (obj, path) => {
  // Regex explained: https://regexr.com/58j0k
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)

  return !!pathArray.reduce((prevObj, key) => prevObj && prevObj[key], obj)
}

const object = { a: { bar: 2 } }

exports.simple = has(object, 'a')
// => true

exports.nested = has(object, 'a.bar')
// => true

exports.array = has(object, ['a', 'bar'])
// => true

exports.missing = has(object, ['a', 'c'])
// => false
