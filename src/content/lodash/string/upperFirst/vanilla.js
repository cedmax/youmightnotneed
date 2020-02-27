const upperFirst = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

exports.lowerCase = upperFirst('fred')
// => 'Fred'

exports.upperCase = upperFirst('FRED')
// => 'FRED'
