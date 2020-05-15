const expected = 1100

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('differenceInMilliseconds', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
