const isObject = data => data && Object.prototype.toString.call(data) === '[object Object]'

function merge (...args) {
  if (!args || !args.length) return {}

  const [firstArg, secondArg, ...otherArgs] = args // eslint-disable-line no-unused-vars
  if (!firstArg && secondArg) {
    return secondArg
  }

  if (!isObject(firstArg) && !Array.isArray(firstArg)) {
    return firstArg
  }

  let result
  if (isObject(firstArg)) {
    result = {}
  }
  if (Array.isArray(firstArg)) {
    result = []
  }

  args.forEach(currentArg => {
    if (currentArg) {
      Object.keys(currentArg).forEach(key => {
        if (isObject(currentArg[key]) && isObject(result[key])) {
          result[key] = merge(result[key], currentArg[key])
        } else if (Array.isArray(currentArg[key]) && Array.isArray(result[key])) {
          let i = 0
          while (i < currentArg[key].length || i < result[key].length) {
            result[key][i] = merge(result[key][i], currentArg[key][i])
            i += 1
          }


          let additionalDataArray = []
          if (i < currentArg[key].length) {
            additionalDataArray = currentArg[key].slice(i, currentArg[key].length)
          }
          if (i < result[key].length) {
            additionalDataArray = result[key].slice(i, currentArg[key].length)
          }
          result[key] = result[key].concat(additionalDataArray)
        } else {
          result[key] = currentArg[key]
        }
      })
    }
  })

  return result
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
