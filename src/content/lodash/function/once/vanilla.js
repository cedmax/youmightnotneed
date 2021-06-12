const once = fn => {
  let called = false
  let result
  return (...args) => {
    if (!called) {
      result = fn(...args)
      called = true
    }
    return result
  }
}

module.exports = fn => once(fn)
