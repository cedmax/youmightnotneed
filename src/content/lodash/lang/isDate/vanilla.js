const isDate = d => d instanceof Date && !isNaN(d)

exports.true = isDate(new Date())
// => true

exports.false = isDate('Mon April 23 2012')
// => false
