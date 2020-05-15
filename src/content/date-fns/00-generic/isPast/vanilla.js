const isPast = date => date < new Date()

// Is 2 July 2014 in the past?
exports.past = isPast(new Date(2014, 6, 2))
// => true

// Is 2 July 2214 in the past?
exports.future = isPast(new Date(2214, 6, 2))
// => false
