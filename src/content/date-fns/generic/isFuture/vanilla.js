const isFuture = date => date > new Date()

// Is 31 December 2214 in the future?
exports.future = isFuture(new Date(2214, 11, 31))
// => true

// Is 31 December 1980 in the future?
exports.past = isFuture(new Date(1980, 11, 31))
// => false
