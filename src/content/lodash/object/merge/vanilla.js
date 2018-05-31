function merge (...args) {
  if (!args || !args.length) {
    return {}
  }

  if (!isObject(args[0]) && !Array.isArray(args[0])) {
    // eslint-disable-next-line no-use-before-define
    return args[0]
  }

  let result
  if (isObject(args[0])) {
    result = {}
  }
  if (Array.isArray(args[0])) {
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

function isObject (data) {
  return (data && Object.prototype.toString.call(data) === '[object Object]')
}

const object = {
  a: [{ b: 2 }, { d: 4 }],
}

const other = {
  a: [{ c: 3 }, { e: 5 }],
}

merge(object, other)
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

module.exports = merge
