const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`

module.exports = capitalize('FRED')
// => 'Fred'
