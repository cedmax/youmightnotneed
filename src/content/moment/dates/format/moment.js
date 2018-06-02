const moment = require('moment')

exports.simple = moment().format('YYYY-MM-DD')
// 2018-06-01

exports.complex = moment().format('MMMM D, YYYY, h:mm A')
// June 1, 2018, 9:31 AM
