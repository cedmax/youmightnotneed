const isThisYear = dateA => dateA.getFullYear() === new Date().getFullYear()

module.exports = isThisYear(new Date())
// => true
