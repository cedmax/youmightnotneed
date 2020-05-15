const expected = new Date(2019, 8, 1)

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('addYears', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
