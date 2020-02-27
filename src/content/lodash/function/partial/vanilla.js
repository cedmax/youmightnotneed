const partial = (func, ...args) => {
  if (args[0] === null) {
    args.shift()
    return (...furtherArgs) => func(...furtherArgs, ...args)
  }
  return (...furtherArgs) => func(...args, ...furtherArgs)
}

const greet = (greeting, name) => `${greeting} ${name}`

const sayHelloTo = partial(greet, 'hello')
exports.default = sayHelloTo('fred')
// => 'hello fred'

// Partially applied with placeholders.
const greetFred = partial(greet, null, 'fred')
exports.placeholder = greetFred('hi')
// => 'hi fred'
