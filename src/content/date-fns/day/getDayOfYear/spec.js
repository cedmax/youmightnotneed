const expected = 183

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('getDayOfYear', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
