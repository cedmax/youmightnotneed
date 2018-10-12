const date = new Date()

exports.simple = new Intl.DateTimeFormat('it-IT', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).format(date)
// 2018-06-01

exports.complex = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  day: 'numeric',
  month: 'long',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
}).format(date)
// June 1, 2018, 9:31 AM
