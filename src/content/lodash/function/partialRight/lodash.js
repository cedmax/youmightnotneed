// https://lodash.com/docs/#partialRight
import { partialRight } from 'lodash'

const greet = (greeting, name) => `${greeting} ${name}`

const greetFred = partialRight(greet, 'fred')
module.exports = greetFred('hi')
// => 'hi fred'
