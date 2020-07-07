// https://lodash.com/docs/#get
import { get } from 'lodash'

const object = { a: [{ b: { c: 0 } }] }

exports.string = get(object, 'a[0].b.c')
// => 3

exports.array = get(object, ['a', '0', 'b', 'c'])
// => 3

exports.default = get(object, 'a.b.c', 'default')
// => 'default'
