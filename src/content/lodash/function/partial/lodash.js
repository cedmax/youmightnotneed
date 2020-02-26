// https://lodash.com/docs/#partial
import _, { partial } from 'lodash'

const greet = (greeting, name) => `${greeting} ${name}`

const sayHelloTo = partial(greet, 'hello')
exports.default = sayHelloTo('fred')
// => 'hello fred'

// Partially applied with placeholders.
const greetFred = partial(greet, _, 'fred')
exports.placeholder = greetFred('hi')
// => 'hi fred'
