const isMonday = date => date.getDay() === 1

// Is 22 September 2014 Monday?
module.exports = isMonday(new Date(2014, 8, 22))
// => true
