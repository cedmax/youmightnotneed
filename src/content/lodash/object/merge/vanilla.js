const isObject = data => data && Object.prototype.toString.call(data) === '[object Object]'
const isArray = data => Array.isArray(data)

function merge (...args) {
  const [firstArg, secondArg] = args

  if (typeof firstArg === 'undefined') { return secondArg }

  const firstArgIsObject = isObject(firstArg)
  const firstArgIsArray = isArray(firstArg)

  if (!firstArgIsObject && !firstArgIsArray) {
    return firstArg
  }

  const result = firstArgIsObject ? {} : []

  return args.reduce((result, currentArg) => {
    Object.entries(currentArg).forEach(([key, value]) => {
      if (isObject(value) && isObject(result[key])) {
        result[key] = merge(result[key], value)
      } else if (isArray(value) && isArray(result[key])) {
        let i = 0
        while (i < value.length || i < result[key].length) {
          result[key][i] = merge(result[key][i], value[i])
          i += 1
        }

        let additionalDataArray = []
        if (i < value.length) {
          additionalDataArray = value.slice(i, value.length)
        }
        if (i < result[key].length) {
          additionalDataArray = result[key].slice(i, value.length)
        }
        result[key] = result[key].concat(additionalDataArray)
      } else {
        result[key] = value
      }
    })
    return result
  }, result)
}

const object = {
  a: [{ b: 2 }, { d: 4 }],
}

const other = {
  a: [{ c: 3 }, { e: 5 }],
}

exports.simple = merge(object, other)
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

const arrayWithObjects = [{
  a: 'testdata',
  b: 123,
  c: {
    ca: 1,
    cb: [{ a: 1 }, { b: 1 }],
  },
}, {
  a: 1,
  b: 'abc',
}, {
  a: 'test',
}]

const otherArray = [{
  a: 'testdata',
  b: 555,
  c: {
    cc: 1,
    cb: [{ a: 'test', x: 2 }, { b: 56 }, { c: 1 }],
  },
}, {
  b: 2,
  c: 'def',
}]

exports.complex = merge(arrayWithObjects, otherArray)
// look at the spec file for the output
