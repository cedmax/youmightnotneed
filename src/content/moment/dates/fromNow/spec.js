const moment = require('./moment')
const plain = require('./vanilla')

test('seconds', () => {
  expect(plain.seconds).toEqual(moment.seconds)
})

test('minutes', () => {
  expect(plain.minute).toEqual(moment.minute)
  expect(plain.minutes).toEqual(moment.minutes)
})

test('hours', () => {
  expect(plain.hour).toEqual(moment.hour)
  expect(plain.hours).toEqual(moment.hours)
})

test('days', () => {
  expect(plain.day).toEqual(moment.day)
  expect(plain.days).toEqual(moment.days)
})

test('months', () => {
  expect(plain.month).toEqual(moment.month)
  expect(plain.months).toEqual(moment.months)
})

test('years', () => {
  expect(plain.year).toEqual(moment.year)
  expect(plain.years).toEqual(moment.years)
})
