const once = fn => {
  let counter = 0
  let result
  return (...args) => {
    if (counter === 0) {
      counter++
      result = fn(...args)
      return result
    } else {
      return result
    }
  }
}

module.exports = fn => once(fn)
// => look at the tests for more details
