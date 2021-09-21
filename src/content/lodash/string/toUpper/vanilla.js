const toUpper = str => str.toUpperCase()

exports.example1 = toUpper('--foo-bar--')
// => '--FOO-BAR--'

exports.example2 = toUpper('fooBar')
// => 'FOOBAR'

exports.example3 = toUpper('__foo_bar__')
// => '__FOO_BAR__'
