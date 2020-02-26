const partialRight = (func, ...args) => {
  if (args.slice(-1)[0] === null) {
    args.pop()
    return (...furtherArgs) => func(...args, ...furtherArgs)
  }
  return (...furtherArgs) => func(...furtherArgs, ...args)
}

const greet = (greeting, name) => `${greeting} ${name}`

const greetFred = partialRight(greet, 'fred')
exports.default = greetFred('hi')
// => 'hi fred'

// Partially applied with placeholders.
const sayHelloTo = partialRight(greet, 'hello', null)
exports.placeholder = sayHelloTo('fred')
// => 'hello fred'
