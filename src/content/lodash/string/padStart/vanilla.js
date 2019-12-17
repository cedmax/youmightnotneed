exports.defaultPadding = 'abc'.padStart(6)
// => '   abc'

exports.customPadding = 'abc'.padStart(6, '_-')
// => '_-_abc'

exports.noExtraPadding = 'abc'.padStart(3)
// => 'abc'
