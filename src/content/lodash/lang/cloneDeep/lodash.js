// https://lodash.com/docs/#cloneDeep
import { cloneDeep } from 'lodash'

var objects = [{ 'a': 1 }, { 'b': 2 }]

var deep = cloneDeep(objects)

module.exports = deep[0] === objects[0]
// => false
