// https://lodash.com/docs/#keys
import { keys } from 'lodash'

function Foo() {
  this.a = 1
  this.b = 2
}

Foo.prototype.c = 3

exports.instance = keys(new Foo())
// => ['a', 'b'] (iteration order is not guaranteed)

exports.string = keys('hi')
// => ['0', '1']
