import { get } from 'lodash'

const simpleObject = { a: { b: 2 } }
const complexObject = { a: [{ b: { c: 3 } }] }

exports.simplePath = get(simpleObject, 'a.b')
// => 2
exports.complexPath = get(complexObject, 'a[0].b.c')
// => 3
exports.complexPathArray = get(complexObject, ['a', '0', 'b', 'c'])
// => 2
exports.simpleDefault = get(simpleObject, 'a.b.c', 'default')
// => 'default'
exports.complexDefault = get(complexObject, 'a.b.c', 'default')
// =>  'default'
exports.falseCase = get(complexObject, null)
// =>  undefined
