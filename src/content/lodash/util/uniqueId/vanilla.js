const uniqueId = (
  counter =>
  (str = '') =>
    `${str}${++counter}`
)(0)

exports.composed = uniqueId('contact_')
// => 'contact_1'

exports.simple = uniqueId()
// => '2'
