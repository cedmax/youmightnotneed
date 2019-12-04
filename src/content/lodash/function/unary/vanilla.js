const unary = fn => arg => fn(arg)

module.exports = ['6', '8', '10'].map(unary(Number.parseInt))
// => [6, 8, 10]
