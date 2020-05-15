const isTuesday = date => date.getDay() === 2

// Is 23 September 2014 Tuesday?
module.exports = isTuesday(new Date(2014, 8, 23))
// => true
