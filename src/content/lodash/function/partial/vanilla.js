const partial = (func, ...args) => (...furtherArgs) => func(...args, ...furtherArgs)

const greet = (greeting, name) => `${greeting} ${name}`

const sayHelloTo = partial(greet, 'hello')
module.exports = sayHelloTo('fred')
// => 'hello fred'
