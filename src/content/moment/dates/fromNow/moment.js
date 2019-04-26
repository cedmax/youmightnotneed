const moment = require('moment')

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

let date = new Date(Date.now() - 20 * second)
exports.seconds = moment(date).fromNow()
// a few seconds ago

date = new Date(Date.now() - 60 * second)
exports.minute = moment(date).fromNow()
// a minute ago

date = new Date(Date.now() - 2 * minute)
exports.minutes = moment(date).fromNow()
// 2 minutes ago

date = new Date(Date.now() - 45 * minute)
exports.hour = moment(date).fromNow()
// an hour ago

date = new Date(Date.now() - 3 * hour)
exports.hours = moment(date).fromNow()
// 3 hours ago

date = new Date(Date.now() - 1 * day)
exports.day = moment(date).fromNow()
// a day ago

date = new Date(Date.now() - 5 * day)
exports.days = moment(date).fromNow()
// 5 days ago

date = new Date(Date.now() - 44 * day)
exports.month = moment(date).fromNow()
// a month ago

date = new Date(Date.now() - 120 * day)
exports.months = moment(date).fromNow()
// 4 months ago

date = new Date(Date.now() - 365 * day)
exports.year = moment(date).fromNow()
// a year ago

date = new Date(Date.now() - 2500 * day)
exports.years = moment(date).fromNow()
// 7 years ago
