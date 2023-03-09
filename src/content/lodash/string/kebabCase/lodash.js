// https://lodash.com/docs/#kebabCase
import { kebabCase } from 'lodash'

exports.first = kebabCase('Foo Bar')
// => 'foo-bar'

exports.second = kebabCase('fooBar')
// => 'foo-bar'

exports.third = kebabCase('__FOO_BAR__')
// => 'foo-bar'
