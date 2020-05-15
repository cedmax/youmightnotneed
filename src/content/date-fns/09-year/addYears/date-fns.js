// https://date-fns.org/v2.13.0/docs/addYears
const addYears = require('date-fns/addYears')

// Add 5 years to 1 September 2014:
module.exports = addYears(new Date(2014, 8, 1), 5)
// => Sun Sep 01 2019 00:00:00
