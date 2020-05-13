const isSunday = date => date.getDay() === 0

// Is 21 September 2014 Sunday?
module.exports = isSunday(new Date(2014, 8, 21))
// => true
