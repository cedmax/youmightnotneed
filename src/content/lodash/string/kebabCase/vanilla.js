const kebabCase = str =>
  str
    // Add hypen before capital letters followed by lowercase letters
    .replace(/[A-Z][a-z]/g, match => `-${match}`)
    // Everything that is not alphanumeric with an hypen
    .replace(/[^A-Za-z0-9]/g, '-')
    // Replace consecutive hyphens with a single hyphen
    .replace(/-{2,}/g, '-')
    // Remove hyphen from start and end of the string
    .replace(/(^-|-$)/g, '')
    .toLowerCase()

exports.first = kebabCase('Foo Bar')
// => 'foo-bar'

exports.second = kebabCase('fooBar')
// => 'foo-bar'

exports.third = kebabCase('__FOO_BAR__')
// => 'foo-bar'
