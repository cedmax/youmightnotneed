const toUpper = str => str.toUpperCase()

exports.dash = toUpper('--foo-bar--')
// => '--FOO-BAR--'

exports.default = toUpper('fooBar')
// => 'FOOBAR'

exports.underscore = toUpper('__foo_bar__')
// => '__FOO_BAR__'
