// https://date-fns.org/v3.5.0/docs/addYears
import { addYears } from 'date-fns'

// Add 5 years to 1 September 2014:
module.exports = addYears(new Date(2014, 8, 1), 5)
// => Sun Sep 01 2019 00:00:00
