const isRegExp = obj => obj instanceof RegExp

exports.regex = isRegExp(/abc/)
// => true

exports.notRegex = isRegExp('/abc/')
// => false
