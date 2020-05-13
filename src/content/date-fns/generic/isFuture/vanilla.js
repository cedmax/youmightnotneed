const isFuture = date => date > new Date()

// Is 31 December 2214 in the future?
module.exports = isFuture(new Date(2214, 11, 31))
// => true
