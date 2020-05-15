const isWeekend = date => [0, 6].includes(date.getDay())

// Does 5 October 2014 fall on a weekend?
module.exports = isWeekend(new Date(2014, 9, 5))
// => true
