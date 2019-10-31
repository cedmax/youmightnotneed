// https://lodash.com/docs/#isArray
import { isArray } from 'lodash'

exports.array = isArray([1, 2, 3])
// => true

exports.dom_body_children = isArray(document.body.children)
// => false

exports.string = isArray('abc')
// => false
