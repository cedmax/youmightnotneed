const isFriday = date => date.getDay() === 5

// Is 26 September 2014 Friday?
module.exports = isFriday(new Date(2014, 8, 26))
// => true
