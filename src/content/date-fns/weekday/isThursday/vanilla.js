const isThursday = date => date.getDay() === 4

// Is 25 September 2014 Thursday?
module.exports = isThursday(new Date(2014, 8, 25))
// => true
