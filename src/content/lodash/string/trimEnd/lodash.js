// https://lodash.com/docs/#trimEnd
import { trimEnd } from 'lodash'

exports.simple = trimEnd(' abc ')
// => ' abc'

exports.custom = trimEnd('-_-abc-_-', '_-')
// => '-_-abc'
