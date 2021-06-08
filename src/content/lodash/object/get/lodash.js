// https://lodash.com/docs/#get
import { get } from 'lodash'

const simpleObject = { a: { b: 2 } }
const complexObject = { a: [{ bar: { c: 3 } }] }
const falsyObject = { a: null, b: undefined, c: 0 }

exports.simplePath = get(simpleObject, 'a.b')
// => 2
exports.complexPath = get(complexObject, 'a[0].bar.c')
// => 3
exports.complexPathArray = get(complexObject, ['a', '0', 'bar', 'c'])
// => 2
exports.simpleDefault = get(simpleObject, 'a.bar.c', 'default')
// => 'default'
exports.complexDefault = get(complexObject, 'a.bar.c', 'default')
// =>  'default'
exports.falseCase = get(complexObject, null)
// =>  undefined
exports.nullCase = get(falsyObject, 'a', 'default')
// =>  null
exports.undefinedCase = get(falsyObject, 'b', 'default')
// =>  undefined
exports.zeroCase = get(falsyObject, 'c', 'default')
// =>  zero
