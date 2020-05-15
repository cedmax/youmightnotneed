const isWednesday = date => date.getDay() === 3

// Is 24 September 2014 Wednesday?
module.exports = isWednesday(new Date(2014, 8, 24))
// => true
