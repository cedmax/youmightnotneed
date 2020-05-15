const isSaturday = date => date.getDay() === 6

// Is 27 September 2014 Saturday?
module.exports = isSaturday(new Date(2014, 8, 27))
// => true
