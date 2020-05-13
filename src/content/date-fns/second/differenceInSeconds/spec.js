const expected = 12

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('differenceInSeconds', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
