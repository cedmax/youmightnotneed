exports.defaultPadding = 'abc'.padEnd(6)
// => 'abc   '

exports.customPadding = 'abc'.padEnd(6, '_-')
// => 'abc_-_'

exports.noExtraPadding = 'abc'.padEnd(3)
// => 'abc'
