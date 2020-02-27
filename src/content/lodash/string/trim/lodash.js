// https://lodash.com/docs/#trim
import { trim } from 'lodash'

exports.simple = trim(' abc ')
// => 'abc'

exports.custom = trim('-_-abc-_-', '_-')
// => 'abc'

exports.map = [' foo ', ' bar '].map(trim)
// => ['foo', 'bar']
