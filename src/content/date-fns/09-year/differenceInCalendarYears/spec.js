const expected = 2

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('differenceInCalendarYears', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
