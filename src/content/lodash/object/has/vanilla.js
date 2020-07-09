const has = (obj, path) => {
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])/g)

  return !!pathArray.reduce((prevObj, key) => prevObj && prevObj[key], obj)
}

const object = { a: { b: 2 } }

exports.simple = has(object, 'a')
// => true

exports.nested = has(object, 'a.b')
// => true

exports.array = has(object, ['a', 'b'])
// => true

exports.missing = has(object, ['a', 'c'])
// => false
