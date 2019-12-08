// https://lodash.com/docs/#toPairs
import { toPairs } from 'lodash'

function Foo() {
  this.a = 1
  this.b = 2
}

Foo.prototype.c = 3

module.exports = toPairs(new Foo())
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
