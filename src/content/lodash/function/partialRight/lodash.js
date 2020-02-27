// https://lodash.com/docs/#partialRight
import _, { partialRight } from 'lodash'

const greet = (greeting, name) => `${greeting} ${name}`

const greetFred = partialRight(greet, 'fred')
exports.default = greetFred('hi')
// => 'hi fred'

// Partially applied with placeholders.
const sayHelloTo = partialRight(greet, 'hello', _)
exports.placeholder = sayHelloTo('fred')
// => 'hello fred'
