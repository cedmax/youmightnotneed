// https://lodash.com/docs/#bind
import { bind } from 'lodash'

function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation
}

var object = { user: 'fred' }

var bound = bind(greet, object, 'hi')

module.exports = bound('!')
// => 'hi fred!'
