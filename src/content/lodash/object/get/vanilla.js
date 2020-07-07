const get = (obj, path, def) => {
  if (typeof path === 'string') {
    path = path.match(/([^[.\]])/g)
  }

  const result = path.reduce((acc, key) => (acc ? acc[key] : undefined), obj)
  return result === undefined ? def : result
}

const object = { a: [{ b: { c: 0 } }] }

exports.string = get(object, 'a[0].b.c')
// => 3

exports.array = get(object, ['a', '0', 'b', 'c'])
// => 3

exports.default = get(object, 'a.b.c', 'default')
// => 'default'
