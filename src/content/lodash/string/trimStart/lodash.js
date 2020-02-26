// https://lodash.com/docs/#trimStart
import { trimStart } from 'lodash'

exports.simple = trimStart(' abc ')
// => 'abc '

exports.custom = trimStart('-_-abc-_-', '_-')
// => 'abc-_-'
