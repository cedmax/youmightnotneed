const has = (obj, path) => {
  if (typeof path === 'string') {
    path = path.match(/([^[.\]])/g)
  }

  const result = path.reduce((acc, key) => (acc ? acc[key] : undefined), obj)
  return result !== undefined
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
