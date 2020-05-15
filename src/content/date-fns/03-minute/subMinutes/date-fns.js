// https://date-fns.org/v2.13.0/docs/subMinutes
const subMinutes = require('date-fns/subMinutes')

// Subtract 30 minutes from 10 July 2014 12:00:00:
module.exports = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
// => Thu Jul 10 2014 11:30:00
