const before = (times, fn) => {
  let counter = 0
  let res

  return (...args) => {
    counter++

    if (counter < times) {
      res = fn(...args)
      return res
    } else {
      return res
    }
  }
}

module.exports = (times, fn) => before(times, fn)
// => check the tests for more details
