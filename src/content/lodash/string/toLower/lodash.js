// https://lodash.com/docs/#toLower
import { toLower } from 'lodash'

exports.dash = toLower('--Foo-Bar--')
// => '--foo-bar--'

exports.default = toLower('fooBar')
// => 'foobar'

exports.underscore = toLower('__FOO_BAR__')
// => '__foo_bar__'

module.exports = toLower()
// =>
