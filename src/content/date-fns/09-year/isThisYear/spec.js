const expected = true

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('isThisYear', () => {
  expect(datefns).toEqual(expected)
  expect(plain).toEqual(datefns)
})
