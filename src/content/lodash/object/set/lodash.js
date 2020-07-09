// https://lodash.com/docs/#set
import { set } from 'lodash'

const object = { a: [{ b: { c: 3 } }] }

set(object, 'a[0].b.c', 4)
exports.string = object.a[0].b.c
// => 4

set(object, ['x', '0', 'y', 'z'], 5)
exports.array = object.x[0].y.z
// => 5
