// https://lodash.com/docs/#rest
import _, { rest } from 'lodash'

const say = rest(
  (what, names) =>
    what +
    ' ' +
    names.slice(0, -1).join(', ') + // see _.initial
    (names.length > 1 ? ', & ' : '') +
    names[names.length - 1] // see _.last
)

module.exports = say('hello', 'fred', 'barney', 'pebbles')
// => 'hello fred, barney, & pebbles'
