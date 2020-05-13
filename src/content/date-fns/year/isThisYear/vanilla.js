const isThisYear = dateA => dateA.getFullYear() === new Date().getFullYear()

// If today is 25 September 2014, is 2 July 2014 in this year?
module.exports = isThisYear(new Date())
// => true
