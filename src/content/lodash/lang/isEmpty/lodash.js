// https://lodash.com/docs/#isEmpty
import { isEmpty } from 'lodash'

exports.null = isEmpty(null)
// => true
 
exports.true = isEmpty(true)
// => true
 
exports.number = isEmpty(1)
// => true
 
exports.array = isEmpty([1, 2, 3])
// => false
 
exports.object = isEmpty({ 'a': 1 })
// => false

exports.map = isEmpty(new Map())
// => true
