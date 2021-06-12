const delay = (fn, timer, ...args) => setTimeout(() => fn(...args), timer)

module.exports = fn => delay(fn, 1000, 'later')
// => look at the tests for more details
