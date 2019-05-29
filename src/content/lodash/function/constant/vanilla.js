const constant = arg => () => arg
const return42 = constant(42)

module.exports = return42()
// => 42
