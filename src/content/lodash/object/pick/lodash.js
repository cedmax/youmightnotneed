// https://lodash.com/docs/#pick
import { pick } from 'lodash'

const object = {
  a: 1,
  b: 2,
  c: 3,
}

module.exports = pick(object, ['a', 'c'])
// => {a: 1, c: 3}
