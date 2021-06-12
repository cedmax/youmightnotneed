const after = (times, fn) => {
  let counter = 0

  return (...args) => {
    counter++

    if (counter >= times) {
      return fn(...args)
    }
  }
}

module.exports = (times, fn) => after(times, fn)
// => check the tests for more details
