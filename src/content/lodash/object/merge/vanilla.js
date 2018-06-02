const isObject = data => data && Object.prototype.toString.call(data) === '[object Object]'
const isArray = data => Array.isArray(data)

function merge (...args) {
  const [firstArg, secondArg] = args

  if (typeof firstArg === 'undefined') { return secondArg }

  const firstArgIsObject = isObject(firstArg)
  const firstArgIsArray = isArray(firstArg)

  if (!firstArgIsObject && !firstArgIsArray) {
    return secondArg || firstArg
  }

  const result = firstArgIsObject ? {} : []
  return args.reduce((result, currentArg) => {
    Object.entries(currentArg).forEach(([key, value]) => {
      if (isObject(value) && isObject(result[key])) {
        result[key] = merge(result[key], value)
      } else if (isArray(value) && isArray(result[key])) {
        const maxLength = Math.min(value.length, result[key].length)

        for (let i = 0; i < maxLength; i++) {
          result[key][i] = merge(result[key][i], value[i])
        }

        const additionalDataArray = []
        additionalDataArray.push(...value.slice(maxLength, value.length))
        additionalDataArray.push(...result[key].slice(maxLength, value.length))
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

const array = [{ a: 1 }, { b: 2 }, { c: 3 }, [1, 2, 3]]
const anotherArray = [{ b: 1 }, { c: 2 }, { d: 3 }, [4, 5, 6, 7]]
const lastArray = [{ f: 1 }, { c: 5 }, { e: 3 }, []]

exports.array = merge(array, anotherArray, lastArray)
// [{"a": 1, "b": 1, "f": 1}, {"b": 2, "c": 5}, {"c": 3, "d": 3, "e": 3}, [4, 5, 6, 7]]

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

const yetAnotherOne = [{
  c: {
    cb: [{ a: 'test', x: 2 }, { b: 56 }, { c: 1 }, { d: 12 }],
  },
}]

const evenMore = [{
  d: 1,
}, {
  a: 1,
  b: 'abc',
}, {
  a: 'test',
}, {
  c: 2,
}]

exports.complex = merge(arrayWithObjects, otherArray, yetAnotherOne, evenMore)
// look at the spec file for the output
