const attempt = (func, ...args) => {
  try {
    return func(...args)
  } catch (e) {
    return e
  }
}

exports.success = attempt(item => item.split(''), 'string')
// => ["s", "t", "r", "i", "n", "g"]

exports.failure = attempt(item => item.split(''), 1)
// => [TypeError: item.split is not a function]
