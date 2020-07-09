const set = (obj, path, value) => {
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])/g)

  pathArray.reduce((acc, key, i) => {
    if (acc[key] === undefined) acc[key] = {}
    if (i === pathArray.length - 1) acc[key] = value
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
