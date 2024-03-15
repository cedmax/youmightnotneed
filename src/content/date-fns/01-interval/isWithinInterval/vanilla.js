const isWithinInterval = (date, { start, end }) =>
  date.getTime() >= start.getTime() && date.getTime() <= end.getTime()

exports.in = isWithinInterval(new Date(2014, 0, 3), {
  start: new Date(2014, 0, 1),
  end: new Date(2014, 0, 7),
})
//=> true

exports.out = isWithinInterval(new Date(2014, 0, 10), {
  start: new Date(2014, 0, 1),
  end: new Date(2014, 0, 7),
})
//=> false

// new Date is mocked as
// new Date(2014, 8, 25, 18, 30, 15, 500)
const date = new Date()

exports.start = isWithinInterval(date, {
  start: date,
  end: new Date(2020, 0, 1),
})
// => true

exports.end = isWithinInterval(date, {
  start: new Date(2000, 0, 1),
  end: date,
})
// => true
