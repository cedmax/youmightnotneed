const expected = 1

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('differenceInYears', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
