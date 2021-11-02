const partialRight =
  (func, ...cachedArgs) =>
  (...args) =>
    func(...args, ...cachedArgs)

const greet = (greeting, name) => `${greeting} ${name}`

const greetFred = partialRight(greet, 'fred')
module.exports = greetFred('hi')
// => 'hi fred'
