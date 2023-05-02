// Regex explained: https://regexr.com/5c55v
const re = /([0-9]+|([A-Z][a-z]+)|[a-z]+|([A-Z]+)(?![a-z]))/g

const kebabCase = str =>
  (String(str ?? '').match(re) || []).map(x => x.toLowerCase()).join('-')

exports.fooSpaceBar = kebabCase('Foo Bar')
// => 'foo-bar'

exports.fooBar = kebabCase('fooBar')
// => 'foo-bar'

exports.foo_bar = kebabCase('__FOO_BAR__')
// => 'foo-bar'

exports.null = kebabCase(null)
// => ''

exports.UPPERCASE = kebabCase('UPPERCASE')
// => 'uppercase'

exports.false = kebabCase(false)
// => 'false'

exports.undefined = kebabCase(undefined)
// => ''

exports.number = kebabCase(0)
// => '0'

exports.camelCase = kebabCase('camelCase')
// => 'camel-case'

exports.nonAlphaChar = kebabCase('?')
// => ''

exports.CustomXMLParser = kebabCase('Custom*XML*Parser')
// => 'custom-xml-parser'

exports.APIFinder = kebabCase('APIFinder')
// => 'api-finder'

exports.UserAPI20Endpoint = kebabCase('UserAPI20Endpoint')
// => 'user-api-20-endpoint'

exports.var30fghIJ = kebabCase('30fghIJ')
// => '30-fgh-ij'
