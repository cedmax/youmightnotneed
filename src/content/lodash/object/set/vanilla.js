const set = (obj, path, value) => {
  if (typeof path === 'string') {
    path = path.match(/([^[.\]])/g)
  }

  path.reduce((acc, key, i) => {
    if (acc[key] === undefined) acc[key] = {}
    if (i === path.length - 1) acc[key] = value
    return acc[key]
  }, obj)
}

const object = { a: [{ b: { c: 3 } }] }

set(object, 'a[0].b.c', 4)
exports.string = object.a[0].b.c
// => 4

set(object, ['x', '0', 'y', 'z'], 5)
exports.array = object.x[0].y.z
// => 5
