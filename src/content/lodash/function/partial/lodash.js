// https://lodash.com/docs/#partial
import { partial } from 'lodash'

const greet = (greeting, name) => `${greeting} ${name}`

const sayHelloTo = partial(greet, 'hello')
module.exports = sayHelloTo('fred')
// => 'hello fred'
