// https://lodash.com/docs/#unset
import { unset } from 'lodash'

const object = { a: [{ bar: { c: 7, d: 6 } }] }

unset(object, 'a[0].bar.c')
module.exports = object
// => { 'a': [{ 'bar': { 'd': 6 } }] };
