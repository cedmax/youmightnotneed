const expected = new Date(2014, 11, 1, 22, 15, 59, 999)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('endOfMinute', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
