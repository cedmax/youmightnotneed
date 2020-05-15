const expected = new Date(2014, 8, 2, 11, 59, 59, 999)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('endOfHour', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
