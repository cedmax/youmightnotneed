const addSeconds = (date, s) => {
  date.setSeconds(date.getSeconds() + s)
  return date
}

// Add 30 seconds to 10 July 2014 12:45:00:
module.exports = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
// => Thu Jul 10 2014 12:45:30
