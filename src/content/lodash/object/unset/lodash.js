// https://lodash.com/docs/#unset
import { unset } from 'lodash'

const object = { a: [{ b: { c: 7, d: 6 } }] }

unset(object, 'a[0].b.c')
module.exports = object
// => { 'a': [{ 'b': { 'd': 6 } }] };
