const expected = 'Fri Feb 28 2014'

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('lastDayOfMonth', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
