const toLower = str => str.toLowerCase()

exports.dash = toLower('--foo-bar--')
// => '--foo-bar--'

exports.default = toLower('fooBar')
// => 'foobar'

exports.underscore = toLower('__foo_bar__')
// => '__foo_bar__'
