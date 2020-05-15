const expected = 12

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('differenceInHours', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
