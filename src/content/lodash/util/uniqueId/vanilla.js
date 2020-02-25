/* eslint-disable no-plusplus */

const uniqueId = (() => {
  let counter = 0
  return (str = '') => `${str}${++counter}`
})()

exports.composed = uniqueId('contact_')
// => 'contact_1'

exports.simple = uniqueId()
// => '2'
