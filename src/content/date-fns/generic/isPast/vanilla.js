const isPast = date => date < new Date()

// Is 2 July 2014 in the past?
module.exports = isPast(new Date(2014, 6, 2))
// => true
