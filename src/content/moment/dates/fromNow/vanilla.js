const timeAgo = (() => {
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const thresholds = [
    { threshold: 540 * day, modifier: 365 * day, render: elapsed => `${elapsed} years ago` },
    { threshold: 320 * day, render: () => 'a year ago' },
    { threshold: 45 * day, modifier: 30 * day, render: elapsed => `${elapsed} months ago` },
    { threshold: 26 * day, render: () => 'a month ago' },
    { threshold: 36 * hour, modifier: 24 * hour, render: elapsed => `${elapsed} days ago` },
    { threshold: 22 * hour, render: () => 'a day ago' },
    { threshold: 90 * minute, modifier: 60 * minute, render: elapsed => `${elapsed} hours ago` },
    { threshold: 45 * minute, render: () => 'an hour ago' },
    { threshold: 90 * second, modifier: 60 * second, render: elapsed => `${elapsed} minutes ago` },
    { threshold: 46 * second, render: () => 'a minute ago' },
    { threshold: 0 * second, render: () => 'a few seconds ago' },
  ]

  return date => {
    const elapsed = Math.round(new Date() - date)
    const { render, modifier } = thresholds.find(({ threshold }) => elapsed >= threshold)
    return render(Math.round(elapsed / modifier))
  }
})()

// duplicating just for testing purposes
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

let date = new Date(Date.now() - 20 * second)
exports.seconds = timeAgo(date)
// a few seconds ago

date = new Date(Date.now() - 60 * second)
exports.minute = timeAgo(date)
// a minute ago

date = new Date(Date.now() - 2 * minute)
exports.minutes = timeAgo(date)
// 2 minutes ago

date = new Date(Date.now() - 45 * minute)
exports.hour = timeAgo(date)
// an hour ago

date = new Date(Date.now() - 3 * hour)
exports.hours = timeAgo(date)
// 3 hours ago

date = new Date(Date.now() - 1 * day)
exports.day = timeAgo(date)
// a day ago

date = new Date(Date.now() - 5 * day)
exports.days = timeAgo(date)
// 5 days ago

date = new Date(Date.now() - 30 * day)
exports.month = timeAgo(date)
// a month ago

date = new Date(Date.now() - 120 * day)
exports.months = timeAgo(date)
// 4 months ago

date = new Date(Date.now() - 365 * day)
exports.year = timeAgo(date)
// a year ago

date = new Date(Date.now() - 2500 * day)
exports.years = timeAgo(date)
// 7 years ago
