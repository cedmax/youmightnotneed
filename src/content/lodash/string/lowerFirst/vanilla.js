const lowerFirst = str => `${str.charAt(0).toLowerCase()}${str.slice(1)}`

exports.normal = lowerFirst('Fred')
// => 'fred'

exports.allCaps = lowerFirst('FRED')
// => 'fRED'
