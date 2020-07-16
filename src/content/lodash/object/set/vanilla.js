const set = (obj, path, value) => {
  // Regex explained: https://regexr.com/58j0k
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)

  pathArray.reduce((acc, key, i) => {
    if (acc[key] === undefined) acc[key] = {}
    if (i === pathArray.length - 1) acc[key] = value
    return acc[key]
  }, obj)
}

const object = { a: [{ bar: { c: 3 } }] }

set(object, 'a[0].bar.c', 4)
exports.string = object.a[0].bar.c
// => 4

set(object, ['x', '0', 'y', 'z'], 5)
exports.array = object.x[0].y.z
// => 5
